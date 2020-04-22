# stfu-and-click-client

This is a client for stfu and click challenge.

## API

All requests from browser are fired againts `/api`. When deployed this endpoint is served by express. For local development there is a proxy to avoid CORS restrictions.

## Structure

Routable components are placed in `pages` folder.

Atoms (very basic components, basicaly carrying only styling) are placed in `atoms` folder.

Other components (both presentation and container) are placed in `components` folder.

API requests are stored in `api` folder.

Everything related to the redux is stored in `store` folder.

## Scripts

- `yarn start`
- `yarn test`
- `yarn build`
