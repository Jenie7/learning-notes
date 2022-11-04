const axios = require('axios');

module.exports = async function request({
  url,
  method = 'get',
  headers = {},
  data,
}) {
  console.log('\n[Request]', url, '\n');
  /* if (data) {
    console.log(headers, '\n', data);
    return !1;
  } */
  const { data: responseData } = await axios({
    method,
    url,
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36 Edg/106.0.1356.0',
      ...headers,
    },
    data,
  });
  return responseData;
};
