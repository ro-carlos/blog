docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images --filter=reference="*:sneak*" -q) --force
docker build -f Dockerfile -t sneak .
docker tag sneak sneak:sneak_v1
docker run  -p 80:80  sneak