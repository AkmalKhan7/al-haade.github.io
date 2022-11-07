const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./index.html');
const audio = fs.readFileSync('./audio.html');
const about = fs.readFileSync('./about.html');
const contact = fs.readFileSync('./contact.html');

const server = http.createServer((req, res) => {
  console.log(req.url);
  url = req.url;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if (url == '/') {
    res.end(index);
  }
  else if (url == '/about') {
    res.end(about);
  }
  else if (url == '/audio') {
    res.end(audio);
  }
  else if (url == '/contact') {
    res.end(contact);
  }
  else {
    res.statusCode = 200;
    res.end("404 ERROR");
  }
}
);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
