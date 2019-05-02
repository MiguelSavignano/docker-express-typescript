docker build -t nodejs-app .
docker run --rm -e PORT=3000 -p 3000:3000 nodejs-app
