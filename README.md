# You need
- NPM
- Node.js
- NestJS
- Docker

# Start Commands for docker-compose file
Builds, (re)creates, starts, and attaches to containers for a service.
`docker-compose up`

# Start Commands for Docker
Build your image:
`docker build <your path> -t <<user>/project-name>`

Run:
`docker run -p 8080:3000 <<user>/project-name>`

For Example:

`docker build <your path> -t Barimehdi77/nestjs-dockerized`

`docker run -p 8080:3000 Barimehdi77/nestjs-dockerized`

Basic Docker Commands:<br/>
List your docker images: `docker images`<br/>
List your running containers: `docker ps`<br/>
List also stopped containers: `docker ps -a`<br/>
Kill a running container: `docker kill <id of container from docker ps (first 3 letters)>`, eg `docker kill fea`<br/>
