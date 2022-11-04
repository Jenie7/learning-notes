/* cSpell:disable */

/* eslint-disable no-await-in-loop */
const fs = require('fs-extra');
const request = require('../assets/request');
const download = require('../assets/download');
const { user, headers, csrftoken } = require('./config');
const sleep = require('../assets/sleep');

function extractMedia(node) {
  const image = node.image_versions2;
  const video = node.video_versions;
  const extension = !video ? 'jpeg' : 'mp4';
  return {
    mediaURL: video ? video[0].url : image.candidates[0].url,
    fileName: `${node.id}.${extension}`,
    seen: {
      reelMediaId: node.pk,
      reelMediaOwnerId: node.user.pk,
      reelId: node.user.pk,
      reelMediaTakenAt: node.taken_at,
      viewSeenAt: Math.floor(+new Date() / 1000),
    },
  };
}

async function downloadStories(storiesMedia) {
  const folder = `./projects/instagram/users-media/${user.name}/stories/`;
  await fs.ensureDir(folder);

  for (let index = 0; index < storiesMedia.length; index += 1) {
    const { mediaURL, fileName, seen } = storiesMedia[index];
    const { status } = await download(mediaURL, `${folder}/${fileName}`);
    if (status === 'ok') {
      await sleep(1000);
      await request({
        url: 'https://www.instagram.com/api/v1/stories/reel/seen',
        method: 'post',
        headers: {
          ...headers,
          'x-csrftoken': csrftoken,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: new URLSearchParams(seen).toString(),
      });
    }
  }
}

function filterStories(stories) {
  return stories.filter(({ fileName }) => {
    const storyPath = `./projects/instagram/users-media/${user.name}/stories/${fileName}`;
    return !fs.pathExistsSync(storyPath);
  });
}

async function Main() {
  const url = `https://www.instagram.com/api/v1/feed/reels_media/?reel_ids=${user.id}`;

  const storiesData = await request({ url, headers });
  const storiesItems = storiesData.reels_media[0].items;

  const storiesMedia = storiesItems.map((node) => extractMedia(node));
  const filteredStories = filterStories(storiesMedia);

  if (filteredStories.length) {
    console.log(`${filteredStories.length} new stories`);
    await downloadStories(filteredStories);
  }

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
