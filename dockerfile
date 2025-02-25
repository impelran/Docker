FROM alpine

WORKDIR /app
COPY . .

RUN apk add --no-cache nodejs npm

RUN npm i

EXPOSE 3000

CMD ["node", "server.js"]