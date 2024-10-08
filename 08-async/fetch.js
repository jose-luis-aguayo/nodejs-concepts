const https = require('https')
const url = "https://localhost:5000/#!/quote/8939/resume";
https.get(url, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    data = JSON.parse(data);
    console.log(data);
  })
}).on('error', err => {
  console.log(err.message);
})