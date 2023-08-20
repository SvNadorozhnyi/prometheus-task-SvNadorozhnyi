FROM node:14

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY ./ .

EXPOSE 8080

CMD [ "npm", "start" ]

FROM redis:latest

EXPOSE 6379
