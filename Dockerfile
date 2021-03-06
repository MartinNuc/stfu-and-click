FROM node:12

WORKDIR /app
EXPOSE 3001

COPY package.json .
COPY client/package.json ./client/
COPY server/package.json ./server/
COPY shared/package.json ./shared/
COPY yarn.lock .
RUN yarn install --frozen-lockfile
COPY . .

RUN yarn build
ENV NODE_ENV production
CMD node dist/index.js