# Test task for SLMax - Galery app

Allows to add, delete, edit and view galery cards. Build with Next.js and express.

## Setup and start app

#### 1. Install [Node.js](https://nodejs.org/)

#### 2. Clone the repo and install dependencies:

- Open terminal in a folder where you are going to install the project
- Run command:

```sh
git clone https://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@github.com/terrign/slmax-meow-react-testovoe-zadanie.git
cd slmax-meow-react-testovoe-zadanie/be
npm install
cd ../fe
npm install
```

#### 4. Start backend

- Open `be` folder in terminal
- Seed db and run server

```sh
npm run seed-database && npm run start-server
```

#### 5. Build and start Next server

- Open `fe` folder in terminal
- Build and start project `npm build`

```sh
npm run build && npm run start
```

#### 6. Open the app http://localhost:3000/

## Useful scripts

- `be/reset-database` - resets database and clears blob storage
- `be/seed-databse` - creates 30 cards with for galery
- `fe/clear-cache` - clears next cache
