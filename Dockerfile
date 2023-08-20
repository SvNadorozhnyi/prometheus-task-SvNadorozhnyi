FROM node:14

WORKDIR ./

COPY package*.json ./webapp

RUN npm install

COPY . ./webapp

EXPOSE 8080

CMD ["node", "app.js"]
