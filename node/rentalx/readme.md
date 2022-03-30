# Rentalx readme

# 1. Docker 
## 1.1 run instructions
    docker build -t rentalx .
    docker run -p 3333:3333 rentalx
    docker stop 'container_id'

## 1.2 find container

❯ `docker ps` *it will return  some information about the container and in the last tab, the name.* <br>
❯ `docker exec -t container_name_example /bin/bash` <br>

## 1.3 docker compose

❯ `docker-compose up` <br>
❯ `docker-compose up -d` *run even in background* <br>
❯ `docker logs 'name' -f` *log in realtime* <br>
❯ `docker-compose stop` *stop the container* <br>
❯ `docker-compose down` *remove all things created* <br>

## 1.4 get IP

`docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rentalx-container`



# 2. TypeORM 
## 2.1 Migrations commands
    yarn typeorm migration:create
    yarn typeorm migration:run

# 3. Utils
### Solving the 'network_mode is incompatible with port_bindings' problem
- https://www.notion.so/Refatora-o-Docker-com-TypeORM-4500fc0d075349ac9b97d670e734d41b
