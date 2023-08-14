tsc
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi shopping_list-shopping_list_app
docker-compose up