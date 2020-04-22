# stfu-and-click

![Continous deployment](https://github.com/MartinNuc/stfu-and-click/workflows/Continous%20deployment/badge.svg)

This a repository for interview challenge for AppLifting.

The goal is to create a game where users click a button to reach the higest score. Players may group into teams to achieve higher score together.

## What I wanted to try out during this challenge

- ✅ Redis as a storage although it's better for caching
- ✅ yarn workspaces
- ✅ server REST tests using [supertest](https://github.com/visionmedia/supertest)
- ✅ Github Actions with dependency caching
- ✅ deploy to Heroku using Docker container from Github Actions
- ✅ docker compose to run app locally (not for development)
- ✅ [Redux-toolkit](http://redux-toolkit.js.org)
- ✅ [Framer](https://www.framer.com/) for animations
- ✅ [react-testling-library](https://testing-library.com/)
- ❌ [Redux-Saga]https://redux-saga.js.org - used only Thunk at the end 🙁

## Docker

Use `docker-compose up` to start the app including Redis. It runs the production build. It is not intended for development.

## Server

See [server's README.md](./server/README.md)

## Client

See [client's README.md](./client/README.md)


## Shared

Shared module contains Typescript models which are shared between client and server for API.

## Scripts

`yarn server start` to start server

`yarn client start` to start client

`yarn build` to build server+client into dist folder. Client is being placed into `public` folder in server so it can be deployed together. Express is configured to load client app except for `/api` requests.

`yarn server test` to run tests (local redis must be running for integration tests)
