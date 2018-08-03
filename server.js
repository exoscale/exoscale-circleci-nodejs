const http = require("http");

const port = 3000;

const app_version = process.env.APP_VERSION;

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write(`Version: ${app_version}`);
    res.end();
});

server.listen(port);

console.log(`Server listening on port:${port} at version:${app_version}`);
