## Installation


1. Clone repository - `$ git clone https://github.com/TijanAyo/prisma_in_500_seconds.git`

2. Install dependencies - `$ npm install`

3. Create a new file `.env` if it doesn't exist and copy the contents of `.env.example` into it to be able to run your server on production environment.

<br>

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

## Setting up DB
# Make sure you have mysql or postgresql installed, you could use any database of your choice

# Initialize Prisma 
$ npx prisma init

# Connect to your db by providing the appropriate credentials, check .env.example for a similar example

# Migrate the Database 
$ npx prisma migrate up

# Start up prisma studio
$ npx prisma studio
```