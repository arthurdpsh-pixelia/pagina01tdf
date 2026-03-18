const https = require('https');

function fetchImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        const match = data.match(/https:\/\/i\.ibb\.co\/[^"]+/);
        if (match) resolve(match[0]);
        else resolve('Not found for ' + url);
      });
    }).on('error', reject);
  });
}

async function run() {
  const img1 = await fetchImage('https://ibb.co/FbFtQdxQ');
  const img2 = await fetchImage('https://ibb.co/wrStq8hs');
  console.log('Maria:', img1);
  console.log('Ana:', img2);
}

run();
