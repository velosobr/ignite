# Docker 
## run instructions
❯ docker build -t rentalx .
❯ docker run -p 3333:3333 rentalx
❯ docker stop 'container_id'
❯ docker logs 'application_name' -f observe log in realtime
## find container
❯ docker ps : it will return  some information about the container and in the last tab, the name.
❯ docker exec -t container_name_example /bin/bash //access root container

## docker compose
❯ docker-compose up
❯ docker-compose up -d //run even in background
❯ docker-compose stop // stop the container
❯ docker-compose down // remove all things created





