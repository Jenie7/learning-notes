const fs = require('fs-extra');
const axios = require('axios');

module.exports = async function download(mediaURL, output, delay = 5000) {
  console.log(`[Download] ${output}`);
  if (await fs.pathExists(output)) {
    console.log('File already exists!');
    return !1;
  }

  const writer = fs.createWriteStream(output);

  const client = axios.create({
    baseURL: mediaURL,
    responseType: 'stream',
  });

  const response = await client.get();
  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', () => {
      setTimeout(resolve, delay, { status: 'ok' });
    });
    writer.on('error', reject);
  });
};
