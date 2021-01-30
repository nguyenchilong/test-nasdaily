
FROM node:12.20.1-alpine3.10
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn cache clean
RUN yarn install
COPY . .

EXPOSE 3000
RUN yarn global add nodemon

CMD [ "nodemon", "./src/server.js" ]

