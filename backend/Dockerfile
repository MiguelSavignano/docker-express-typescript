FROM node:10.13.0-alpine

WORKDIR /app
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

COPY package.json package-lock.json /app/
RUN npm ci

COPY . .
CMD npx sequelize db:migrate && npm run start:prod
