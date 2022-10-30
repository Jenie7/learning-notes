const axios = require('axios');

module.exports = async function request({ url, headers = {} }) {
  console.log('\n[Request]', url, '\n');
  const { data } = await axios({
    method: 'get',
    url,
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36 Edg/106.0.1356.0',
      ...headers,
    },
  });
  return data;
};
