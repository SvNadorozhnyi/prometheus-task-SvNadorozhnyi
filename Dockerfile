FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src/ ./src/

EXPOSE 8080

CMD ["node", "src/app.js"]
