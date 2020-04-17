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