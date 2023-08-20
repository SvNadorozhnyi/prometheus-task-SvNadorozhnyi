FROM node:14

WORKDIR /app

COPY webapp/package*.json ./

RUN npm install

COPY webapp/ .

EXPOSE 8080

CMD [ "npm", "start" ]

FROM redis:latest

EXPOSE 6379
