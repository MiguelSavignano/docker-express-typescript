FROM node:10.13.0-alpine as build
WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm ci
COPY . .
RUN npm run build
RUN rm -fr node_modules

# ==========FINAL STAGE=================
FROM node:10.13.0-alpine
WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

COPY --from=build /app/ /app/

# Install only production modules
RUN npm ci

CMD npx sequelize db:create && npx sequelize db:migrate && npm run start:prod
