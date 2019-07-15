# NodeJs app kubernetes

## Nodejs app

## Backend

### Docker images

image: devmasx/express-typescript-backend:latest

| Service | Version |
| ------- | ------- |
| Nodejs  | 10.13.0 |
| Express | 4.16.4  |

Enviroments

| Name              | Required | Default    |
| ----------------- | -------- | ---------- |
| DATABASE_HOST     | true     |            |
| DATABASE_USERNAME | true     |            |
| DATABASE_PASSWORD | true     |            |
| NODE_ENV          | false    | production |
| PORT              | false    | 3000       |

## Frontend

### Docker images

image: devmasx/react-typescript-nginx-frontend:latest

| Service | Version |
| ------- | ------- |
| React   | 16.8.6  |
| Nodejs  | 10.13.0 |

Enviroments

| Name       | Required | Default               |
| ---------- | -------- | --------------------- |
| PROXY_PASS | false    | http://127.0.0.1:3000 |
| API_URL    | false    | /api                  |
| PORT       | false    | 80                    |
