# LOTERIA

LOTERIA project with AdonisJS API and ReactJS

## Installation

Use the package manager NPM to install all packages into api and web app.

```bash
npm install
```

## Configuration

### API

Inside the project there is an .env file with all the environment variables to be able to run it locally.

#### Example file

```js
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=QWERTY
MYSQL_DB_NAME=lottery
```

#### Usage 

The project can run locally if set all enviroment variables and run the following commands.

```bash
node ace migration:run
node ace seed
node ace serve --watch
```

### WEB APP

#### Usage 

The project can run locally if set all enviroment variables and run the following commands.

```bash
npm run start
```

### EXAMPLE APP

![Example](https://github.com/eduardoalanis996/lottery/example.png)
