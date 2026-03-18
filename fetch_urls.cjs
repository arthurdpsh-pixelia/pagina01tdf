const https = require('https');

const urls = [
  'https://ibb.co/39BNDWGZ',
  'https://ibb.co/9JPdZcY',
  'https://ibb.co/jvXp97R8',
  'https://ibb.co/ccPrhqR3',
  'https://ibb.co/xtnZ9Vp3',
  'https://ibb.co/xqHk3JCf',
  'https://ibb.co/HLLyB4dN'
];

async function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/<meta property="og:image" content="([^"]+)"/);
        if (match) {
          resolve(match[1]);
        } else {
          resolve('Not found for ' + url);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  for (const url of urls) {
    const imgUrl = await fetchUrl(url);
    console.log(url, '->', imgUrl);
  }
}

main();
