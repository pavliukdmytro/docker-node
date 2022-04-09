# Start project Node js  with docker

docker-compose -f docker-compose.dev.yml up --build - build project

docker-compose up -d - start production



docker build -t getting-started . - build the container image  
-t - flag tags our image.
getting-started - container's name
. - path to DockerFile

docker run -d -p 80:80 docker/getting-started - start your container  
-d - run the container in detached mode (in the background)  
docker run - start a container  
80:80 - mapping between the host’s port
-p - port
-v <todo-db:/etc/todos> - flag to specify a volume mount

container is  a sandboxed process on your machine that is isolated from all other processes on the host machine

docker ps - Get the ID of the container  
docker stop <the-container-id> - stop the container  
docker rm <the-container-id> - remove container

docker image ls - list images

docker volume create <name> - create volume

docker logs -f <container-id> - watch logs


CMD - the default command to run when starting a container from this image