FROM node:10.13.0-alpine as build
WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm ci
COPY . .

CMD npx ts-node src/worker/uppercaseWorker/index.ts

# docker run --rm --net docker-express-typescript_default -e DATABASE_HOST=db uppercase-worker
