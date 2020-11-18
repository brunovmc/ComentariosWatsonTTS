FROM node:12

WORKDIR /usr/src/server

COPY package*.json ./
RUN npm install
COPY wait-for-it.sh ./wait-for-it.sh
RUN chmod +x wait-for-it.sh

COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]
