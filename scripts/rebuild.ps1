tsc
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi shopping-list-app
docker-compose up -d
docker stop shopping-list-app