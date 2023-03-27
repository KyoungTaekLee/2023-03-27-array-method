const http = require('http');
const fs = require('fs');

function serveStaticFile(response, path, contentType, responseCode) {
  fs.readFile(path, function (err, data) {
    if (err) {
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.end('500 - Internal Error');
    }
    else {
      response.writeHead(responseCode, { 'Content-Type': contentType });
      response.end(data);
    }
  });
}

const server = http.createServer((request, response) => {
  const url = request.url.toLowerCase();

  switch (url) {
    case '/':
      serveStaticFile(response, './index.html', 'text/html', 200);
    case '/about':
      serveStaticFile(response, './about.html', 'text/html', 200);
    default:
      serveStaticFile(response, './404.html', 'text/html', 404);
  }
});

server.listen(2080, () => {
  console.log('2080 port');
})