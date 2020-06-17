# Blog

# Steps to start application (Method 1)
1. Install docker in your machine https://docs.docker.com/get-docker/
2. sh run_aplication.sh
3. http://localhost:80

# Steps to start application (Method 2)
1. Install docker in your machine https://docs.docker.com/get-docker/
2. docker build -f Dockerfile -t sneak .
3. docker run  -p 80:80  sneak
4. Open http://localhost:80


# Steps to start application (Method 3)
1. Paste project inside web server
2. Open browser to visualize page

# Notes

# Stop docker container
1. docker container ls
2. docker stop CONTAINER_Id

# Remove docker container
1. docker container ls
2. docker rm CONTAINER_Id

# Remove docker images
1. docker image ls
2. docker rmi IMAGE_ID



# Stop all container
1. docker stop $(docker ps -aq)

# Delete all containers
1. docker rm -vf $(docker ps -a -q)

# Delete all images
1. docker rmi -f $(docker images -a -q)
