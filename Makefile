# Variables
APP_NAME=nextjs-app
DOCKER_COMPOSE=docker-compose
DOCKERFILE=Dockerfile

# Build the Docker image
build:
	docker build -f $(DOCKERFILE) -t $(APP_NAME):latest .

# Start the app using docker-compose
up:
	$(DOCKER_COMPOSE) up -d

# Stop the app
down:
	$(DOCKER_COMPOSE) down

# Rebuild the app with docker-compose
rebuild:
	$(DOCKER_COMPOSE) build --no-cache

# View logs
logs:
	$(DOCKER_COMPOSE) logs -f

# Run a shell inside the container
shell:
	docker exec -it $$(docker ps -qf "ancestor=$(APP_NAME):latest") sh

# Clean up unused docker artifacts
prune:
	docker system prune -f

nginx:
	cp nginx.conf /etc/nginx/conf.d/haimai-user.conf