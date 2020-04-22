# stfu-and-click

![Continous deployment](https://github.com/MartinNuc/stfu-and-click/workflows/Continous%20deployment/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/ae98316dc9917595e19a/maintainability)](https://codeclimate.com/github/MartinNuc/stfu-and-click/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ae98316dc9917595e19a/test_coverage)](https://codeclimate.com/github/MartinNuc/stfu-and-click/test_coverage)

This a repository for interview challenge for AppLifting.

The goal is to create a game where users click a button to reach the higest score. Players may group into teams to achieve higher score together.

## Demo

http://nucik-stfu-and-click.herokuapp.com

## What I wanted to try out during this challenge

- ✅ Redis as a storage although it's better for caching
- ✅ yarn workspaces
- ✅ server REST tests using [supertest](https://github.com/visionmedia/supertest)
- ✅ Github Actions with dependency caching
- ✅ deploy to Heroku using Docker container from Github Actions
- ✅ docker compose to run app locally (not for development)
- ✅ use Github actions to publish code coverage to the [Codeclimate](http://codeclimate.com). Had to fix [issue](https://github.com/paambaati/codeclimate-action/issues/153).
- ✅ [Redux-toolkit](http://redux-toolkit.js.org)
- ✅ [Framer](https://www.framer.com/) for animations
- ✅ [react-testling-library](https://testing-library.com/)
- ✅ [socket.io](https://socket.io) for game state updates. This is the only network related thing I added to the REST API from the exercies.
- ❌ [Redux-Saga](https://redux-saga.js.org) - used only Thunk at the end 🙁 but I want to try them out in the future. They could help with the order of click requests because with Thunk the response order may not match how requests were being fired.
- ⏳ [Cypress](https://www.cypress.io) - I will write e2e tests some day 🙂
- ⏳ [GraphQL](https://graphql.org) also in the future I would like to replace socket.io and REST with GraphQL and it's subscriptions.

## Caveat

Since server doesn't hold combination of team-session-clicks after user joins the same team it starts counting his clicks from the beggining although he might already have a score from the past. Solution could be to store random fingerprint in the local storage and generate session based on this fingerprint and team.

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

`yarn build` to build server+client into dist folder. Client is being placed into `public` folder in server so it can be deployed together. Express is configured to serve the React app and listen for `/api` requests.

`yarn server test` to run tests (local redis must be running for integration tests)
