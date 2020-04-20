FROM node:12

# RUN apt-get update -y
# RUN apt-get install yarn=1.22.0 -y

WORKDIR /app
EXPOSE 3001

COPY package.json .
COPY client/package.json ./client/
COPY server/package.json ./server/
COPY yarn.lock .
RUN yarn install --frozen-lockfile
COPY . .

RUN yarn build
ENV NODE_ENV production
CMD node dist/index.js