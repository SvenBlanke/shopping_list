##!/bin/bash

git pull
sudo docker stop $(sudo docker ps -a -q)
sudo docker rm $(sudo docker ps -a -q)
sudo docker rmi shopping_list_app
sudo docker-compose up