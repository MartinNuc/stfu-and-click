FROM node:12

RUN apt-get update -y
RUN apt-get install yarn -y

WORKDIR /app
EXPOSE 3000

COPY package.json .
COPY client/package.json ./client/
COPY server/package.json ./server/
COPY yarn.lock .
RUN yarn install
COPY . .

RUN yarn build
CMD node dist/index.js