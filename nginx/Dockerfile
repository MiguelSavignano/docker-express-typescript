#FROM gcr.io/<PROJECT_ID>/react:latest as react

FROM nginx:1.13-alpine

RUN apk upgrade --no-cache

COPY nginx/nginx.conf /etc/nginx/conf.d
COPY nginx/conf.d /etc/nginx/conf.d

WORKDIR /app

#COPY --from=react /app/public ./public
