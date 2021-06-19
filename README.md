### flipr Backend Assignment

---

# node-js-application

A barebones Node.js app using [Express 4](http://expressjs.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
git clone git@github.com:heroku/node-js-sample.git 
cd flipr-backend
npm install
npm start ( using node)
(or)
npm run server (using nodemon)
```

Your app should now be running on [localhost:1000](http://localhost:1000/).

## Documentation

# folder structure
- [flipr-backend]
  - [models]
    - [devices] (schema for devices)
    - [status] (schema for status of those devices)
  - [node_modules]
  - [package-lock.json]
  - [package.json]
  - [readme]
  - [server] (initialization file)



# Packages used
```sh

express
nodemon
mongoose
node-geocoder

```

# A brief abut the project
```sh
- contains two API
  - First: /devices/:name => that takes in mongoDB url as a body, collection 1 name as a params,
    collection 2 name as a query and provide an object or array as a response that contain data of
    30 devices with 50 location of each.
  - Second: /location => that takes an array of address as a ody and provide an array as a response
    that contains objects having the address provide, location in terms of latitude and longitude.
```