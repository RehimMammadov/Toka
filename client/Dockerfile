FROM node:20-alpine

USER root

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN chown -R node:node /app

USER node

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "run", "dev"]
