# Description

A podcast app divided in 3 routes

- podcasts (podcasts list with an input to filter the podcasts)
- podcast details (podcast details and list of episodes)
- episode (podcast details, episode details and media audio player)

The api's calls are made using the browser fetch api and the results are stored in the browser cache so the api calls are performed only if the response has not be cached yet or has been cached for more than 24 hours.

# Technologies used

- React
- Typescript
- React router
- Jest
- Testing library react
- Parcel

# Setup

Once you cloned the repo

```
yarn install
```

# How to run it in development mode

from a terminal tab run

```
yarn dev
```

then it should be available in the browser at `http://localhost:1234`

# How to run it in production mode

from a terminal tab run

```
yarn prod
yarn serve:prod
```

then it should be available in the browser at `http://127.0.0.1:8080/`

# How to run tests

```
yarn test
```
