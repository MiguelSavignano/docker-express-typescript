# BUILD STAGE
FROM node:10-alpine as build

#RUN apk -u add git openssh

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY ./src ./src
COPY ./public ./public
ENV API_URL=/api
RUN npm run build

# FINAL STAGE
FROM nginx:1.15
COPY --from=build /app/build/ /usr/share/nginx/html/
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/conf.d /etc/nginx/conf.d

ENV PORT=80
ENV PROXY_PASS=http://127.0.0.1:3000
CMD /bin/bash -c "envsubst '\$PORT \$PROXY_PASS' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"
