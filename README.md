# stfu-and-click

![Tests](https://github.com/MartinNuc/stfu-and-click/workflows/Tests/badge.svg)

This a repository for interview challenge for AppLifting.

The goal is to create a game where users click a button to reach the higest score. Players may group into teams to achieve higher score together.

`yarn build` builds both frontend and backend into dist folder.

## What I wanted to try out during this challenge

- yarn workspaces
- server REST tests using supertest
- Github Actions
- deploy to Heroku using Docker container from Github Actions
- docker compose to run app locally (not for development)

## Docker

Use `docker-compose up` to start the app including Redis. It runs the production build. It is not intended for development.

## Server

See [server's README.md](./server/README.md)

### Scripts

`yarn server start` to start server

`yarn server build` to build server to `server/dist` folder

`yarn server test` to run tests (local redis must be running for integration tests)

## Client

See [client's README.md](./client/README.md)

## Shared

Shared module contains Typescript models which are shared between client and server for API.

### Scripts

`yarn shared compile` to verify that shared modules is compilable
