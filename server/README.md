# stfu-and-click-server

Server is using [express.js](http://expressjs.com) to provide REST API:

## `/api/v1/leaderboard`

- use `GET` method to load the leaderboard

```json
[
  {
    "order": 1,
    "team": "Applifting s.r.o.",
    "clicks": 17
  },
  {
    "order": 2,
    "team": "Martin Nuc",
    "clicks": 15
  }
]
```

## `/api/v1/click`

- use `POST` method to register a button click to increment score

Request:

```json
{
  "team": "Applifting s.r.o.",
  "session": "362c41b4-4cbc-449c-97e1-547522541adc"
}
```

Response:

```json
{
  "yourClicks": 1,
  "teamClicks": 5
}
```

## Scripts

- `yarn start` - compiles and runs the server
- `yarn build` - compiles the source into `dist` folder
- `yarn test` - runs both unit and integration tests
- `yarn test:unit` - runs unit tests only
- `yarn test:integration` - runs integration tests only

## Persistance

It uses external Redis cache to store data.

Team score is stored in a sorted set called `teams`. The score of sorted set is number of team's clicks. The value is team name.

User's score is stored as a simple number with key `user:<session>`.

Data are not normalized. Storing them normalized in Redis would mean to store data in hashes and use only references in sorted set which I considered overkill but would be probably a better design.
