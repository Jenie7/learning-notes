/* eslint-disable no-await-in-loop */
const fs = require('fs-extra');
const sleep = require('../assets/sleep');
const request = require('../assets/request');
const download = require('../assets/download');
const { user, headers } = require('./config');

function extractMedia(node) {
  const image = node.image_versions2;
  const video = node.video_versions;
  const extension = !video ? 'jpeg' : 'mp4';
  return {
    mediaURL: video ? video[0].url : image.candidates[0].url,
    fileName: `${node.id}.${extension}`,
  };
}

async function getStoryMedia(story) {
  const storyData = await request({
    url: `https://i.instagram.com/api/v1/feed/reels_media/?reel_ids=highlight%3A${story.id}`,
    headers,
  });
  const {
    reels: {
      [`highlight:${story.id}`]: { items },
    },
  } = storyData;
  const storyMedia = items.map((node) => extractMedia(node));
  return {
    id: story.id,
    title: story.title,
    storyMedia,
  };
}

async function getStoriesMedia(stories) {
  const storiesWithMedia = [];

  for (let index = 0; index < stories.length; index += 1) {
    const story = stories[index].node;
    storiesWithMedia.push(await getStoryMedia(story));
    await sleep(5000);
  }
  return storiesWithMedia;
}

async function downloadStory(storyWithMedia) {
  const { id, storyMedia } = storyWithMedia;
  const folder = `./projects/instagram/users-media/${user.name}/highlights/${id}`;
  await fs.ensureDir(folder);

  for (let index = 0; index < storyMedia.length; index += 1) {
    const { mediaURL, fileName } = storyMedia[index];
    await download(mediaURL, `${folder}/${fileName}`);
  }
}

async function downloadStories(storiesWithMedia) {
  for (let index = 0; index < storiesWithMedia.length; index += 1) {
    const storyWithMedia = storiesWithMedia[index];
    await downloadStory(storyWithMedia);
  }
}

function filterStories(stories) {
  return stories.filter(({ node: { id } }) => {
    const storyPath = `./projects/instagram/users-media/${user.name}/highlights/${id}`;
    return !fs.pathExistsSync(storyPath);
  });
}

async function Main() {
  const variables = { user_id: user.id, include_highlight_reels: !0 };
  const parsedVariables = encodeURIComponent(JSON.stringify(variables));
  const url = `https://www.instagram.com/graphql/query/?query_hash=d4d88dc1500312af6f937f7b804c68c3&variables=${parsedVariables}`;

  const storiesData = await request({ url, headers });
  const stories = storiesData.data.user.edge_highlight_reels.edges;
  const filteredStories = filterStories(stories);

  const storiesWithMedia = await getStoriesMedia(filteredStories);
  // console.log(storiesWithMedia);

  await downloadStories(storiesWithMedia);

  console.log('\nComplete!');
}

Main().catch(console.error);

/* request({ url, headers })
  .then((storiesData) => {
    const stories = storiesData.data.user.edge_highlight_reels.edges;
    return filterStories(stories);
  })
  .then((filteredStories) => {
    return getStoriesMedia(filteredStories);
  })
  .then((storiesWithMedia) => {
    return downloadStories(storiesWithMedia);
  })
  .finally(() => console.log('Complete!'))
  .catch(console.error); */
