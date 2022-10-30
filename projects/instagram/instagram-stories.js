/* eslint-disable no-await-in-loop */
const fs = require('fs-extra');
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

async function downloadStories(storiesMedia) {
  const folder = `./projects/instagram/users-media/${user.name}/stories/`;
  await fs.ensureDir(folder);

  for (let index = 0; index < storiesMedia.length; index += 1) {
    const { mediaURL, fileName } = storiesMedia[index];
    await download(mediaURL, `${folder}/${fileName}`);
  }
}

async function Main() {
  const url = `https://www.instagram.com/api/v1/feed/reels_media/?reel_ids=${user.id}`;

  const storiesData = await request({ url, headers });
  const storiesItems = storiesData.reels_media[0].items;

  const storiesMedia = storiesItems.map((node) => extractMedia(node));

  await downloadStories(storiesMedia);

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
