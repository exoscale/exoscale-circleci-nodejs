docker ps --filter "name=node_app"
docker pull $IMAGE
docker rm -f node_app || true
docker run -d \
           --name node_app \
           --restart unless-stopped \
           -p 80:3000 \
           $IMAGE
docker ps --filter "name=node_app"
