const http = require("http");

const app_host = process.env.APP_HOST? process.env.APP_HOST : "localhost:3000";
const app_version = process.env.APP_VERSION;

let attemptsRemaining = 10;
let retryDelay = 1000;

const tryAgain = () => {
    if (attemptsRemaining > 0) {
        attemptsRemaining--;
        setTimeout(checkVersion, retryDelay);
    } else {
        process.exit(1);
    }
};

const checkVersion = () => {
    http.get(`http://${app_host}`, resp => {
        let data = '';
        resp.on('data', chunk => data += chunk);
        resp.on('end', () => {
            const expected = `Version: ${app_version}`
            if (data == expected) {
                console.log(data);
                process.exit(0);
            } else {
                console.log(`${data} != ${expected}`);
                tryAgain();
            }
        });
    }).on("error", err => {
        console.log(`Error: ${err.message}`);
        tryAgain();
    });
}

checkVersion();
