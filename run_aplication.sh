docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi -f $(docker images -a -q)

docker build -f Dockerfile -t sneak .
docker run  -p 80:80  sneak