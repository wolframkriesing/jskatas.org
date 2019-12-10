#!/usr/bin/env bash

set -e

DOCKERFILE_HASH=$(md5 -q ./Dockerfile)
CONTAINER_NAME=jskatas
IMAGE_NAME=${CONTAINER_NAME}:${DOCKERFILE_HASH}

if [[ $(docker inspect --format . ${IMAGE_NAME} 2>&1) != "." ]]; then
  echo "--- BUILDING image '${IMAGE_NAME}'---"
  docker build -t ${IMAGE_NAME} -f Dockerfile .
fi


echo "--- RUNNING container '${CONTAINER_NAME}'---"
docker run --rm \
	--name jskatas-image \
	--publish 9779:9779 \
	--volume $(pwd):/home/node/app \
	jskatas-image $1