FROM node:10.13.0-alpine

WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm ci

COPY . .
CMD npm start
