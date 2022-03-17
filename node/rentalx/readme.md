# Docker 
## run instructions
❯ docker build -t rentalx .
❯ docker run -p 3333:3333 rentalx
## find container
❯ docker ps : it will return  some information about the container and in the last tab, the name.
❯ docker exec -t container_name_example /bin/bash

## docker compose
❯ docker-compose up
❯ docker-compose up -d//run even in background
❯ docker logs 'name' -f log in realtime





