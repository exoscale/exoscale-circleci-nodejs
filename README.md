# Deploying a NodeJS Application to Exoscale with Docker and CircleCI

A minimal NodeJS server with no external dependencies. It runs in a container on port 3000 and it responds with `Version: $APP_VERSION` when called. Port 80 is forwarded from the host to port 3000 on the container.

| File                 | Description                                                   |
| -------------        | -------------                                                 |
| server.js            | The application                                               |
| test.js              | A test (executed by CI server) that checks the version number |
| Dockerfile           | The Dockerfile for our running application                    |
| deploy.sh            | Bash script to replace container on VM                        |
| .circleci/config.yml | CircleCI build configuration                                  |

## Build

```bash
docker build --build-arg APP_VERSION=latest  -t exoscale/circleci-nodejs:latest .
```

## Run
```bash
docker run -d --name node_app exoscale/circleci-nodejs:latest
```

Visit `http://localhost` in a browser or inspect with `curl http://localhost`.

## Stop
```bash
docker rm -f node_app
```
