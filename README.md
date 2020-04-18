# stfu-and-click

![Tests](https://github.com/MartinNuc/stfu-and-click/workflows/Tests/badge.svg)

This a repository for interview challenge for AppLifting.

The goal is to create a game where users click a button to reach the higest score. Players may group into teams to achieve higher score together.

## Server

See [server's README.md](./server/README.md)

### Commands

`yarn server start` to start server

`yarn server build` to build server to `server/dist` folder

`yarn server test` to run tests (local redis must be running for e2e REST tests)

## Client

See [client's README.md](./client/README.md)

## Shared

Shared module contains Typescript models which are shared between client and server for API.

### Commands

`yarn shared compile` to verify that shared modules is compilable
