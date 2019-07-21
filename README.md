# vue-express-typeorm

[![npm version](https://badge.fury.io/js/vue.svg)](https://badge.fury.io/js/vue)
[![npm version](https://badge.fury.io/js/express.svg)](https://badge.fury.io/js/express)
[![npm version](https://badge.fury.io/js/typeorm.svg)](https://badge.fury.io/js/typeorm)
[![npm version](https://badge.fury.io/js/typescript.svg)](https://badge.fury.io/js/typescript)
[![typescript](https://img.shields.io/badge/types-Typescript-blue.svg)](https://img.shields.io/badge/types-Typescript-blue.svg)

> Full stack web app with Vue, Express and TypeORM

## Getting Started

### Prerequisites

For this project you need [__Node__](https://nodejs.org/en/) installed on your machine with [__Npm__](https://www.npmjs.com/) or [__Yarn__](https://yarnpkg.com). Also you need the [Typescript](https://www.typescriptlang.org) compiler installed.

### Download the repository

You can clone this repository using __Git__:
```bash
git clone https://github.com/dj0nny/vue-express-typeorm.git
```

Or download the repository [here](https://github.com/dj0nny/vue-express-typeorm/archive/develop.zip)


## Client

Open a terminal inside the repository directory and type:
```bash
cd client
npm install 
# OR
yarn install
```
for installing all the dependencies. Once finished, type:
```bash
npm run serve
# OR
yarn serve
```
for running the Vue.js server at this address: http://127.0.0.1:8080

## Server

Inside the repository directory, open a terminal and type:
```bash
cd server
npm install 
# OR
yarn install
```
Once finished, you'll need create a `ormconfig.json` and put in your own database connection configuration:
```json
{
  "type": "mysql", 
  "host": "", 
  "port": 3306,
  "username": "",
  "password": "", 
  "database": "", 
  "entities": ["src/entity/*.ts"],
  "logging": true,
  "synchronize": true
}
```
**Warning**: the field `type` **must** be `mysql` because, in this example, it'll be used a mysql database.

A complete guide about the configuration can be found [here](https://typeorm.io/#/using-ormconfig).

Now you can run the Express server typing into the terminal:
```bash
npm run dev
# OR
yarn dev
```
The server will be up and running at this address: http://localhost:3000

### Routes

Down below are listed the Express routes:

Name             | Method           | Action 
-------------    | -------------    |------------
`/articles`      | GET              | Fetch all articles
`/writers`       | GET              | Fetch all writers
`/insertArticle` | POST             | Add a new article
`/insertWriter`  | POST             | Add a new writer

## Contributing

Pull Requests for adding features ⇄ and ★ are welcome 😎