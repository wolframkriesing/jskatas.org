#!/usr/bin/env bash

set -e

docker build -t jskatas-image -f Dockerfile .

docker run --rm -it \
	--name jskatas-image \
	--publish 9779:9779 \
	--volume $(pwd):/home/node/app \
	jskatas-image $1