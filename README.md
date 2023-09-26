# Run ExpressJS development server in Docker.

## Purpose:

To be able to run ExpressJS development server in a Docker container, while doing active development + Hot Reload

## How-to run dev Docker server:

1. Ensure `docker cli` is installed.
1. Run `$ docker-compose up --build`
1. Visit https://localhost:3000/
1. Change something in `src` directory , reload the above page and see it being reflected.

## How-to stop dev Docker server:

1. Press `Ctrl+C`

## How-to remove dev Docker server:

1. Run `$ docker-compose down`

## How-to run tests:

1. Run `$ npm run test`

## Refs:

1. [Docker with Nodejs in 5 mins // Docker Tutorial](https://www.youtube.com/watch?v=hXhI2ZLDgQM&ab_channel=JustinBrooks)
1. [How to Create a Great Local Python Development Environment with Docker](https://www.youtube.com/watch?v=6OxqiEeCvMI&ab_channel=Docker)
1. [How to Test Your Express.js and Mongoose Apps with Jest and SuperTest](https://www.freecodecamp.org/news/how-to-test-in-express-and-mongoose-apps/)
