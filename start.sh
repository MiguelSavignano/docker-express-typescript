docker build -t docker-express-typescript .
docker run --rm -e PORT=3000 -p 3000:3000 docker-express-typescript
