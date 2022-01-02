
.PHONY: setup-node start-dev-server start-docker-containers stop-docker-containers e2e-test format clean

all:build-site

setup-node:
	npm install

start-dev-server:
	npm run start

start-server: build-site
	npm run serve

build-site:
	npm run build

format:
	npm run format

start-docker-containers: 
	docker-compose -f docker-compose.yml up -d --build

stop-docker-containers:
	docker-compose -f docker-compose.yml down

clean-docker-containers: stop-docker-containers
	-docker rm $(docker ps -qa --no-trunc --filter "status=exited")
	-docker volume rm $(docker volume ls -qf dangling=true)
	-docker rmi $(docker images --filter "dangling=true" -q --no-trunc)


e2e-test: 
	npm run cy:run

clean:
	npm run clean
