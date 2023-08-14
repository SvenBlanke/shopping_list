FROM node:16.16

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "node", "dist/app.js" ]