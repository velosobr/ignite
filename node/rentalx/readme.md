# Docker 
## run instructions
❯ docker build -t rentalx .
❯ docker run -p 3333:3333 rentalx
❯ docker stop 'container_id'
## find container
❯ docker ps : it will return  some information about the container and in the last tab, the name.
❯ docker exec -t container_name_example /bin/bash

## docker compose
❯ docker-compose up
❯ docker-compose up -d //run even in background
❯ docker logs 'name' -f log in realtime
❯ docker-compose stop // stop the container
❯ docker-compose down // remove all things created

## get IP
❯ docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rentalx-container



