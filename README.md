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


## Heroku Deployed 
```sh
The application is deployed on [Heroku](https://flipr-backend-assignment.herokuapp.com/)

For testing any API
- First: A test api (GET)
         url: https://flipr-backend-assignment.herokuapp.com/

         response: hello world

- Second: template (POST)
         url: https://flipr-backend-assignment.herokuapp.com/devices/Devices
         body: {
                    "url": "mongodb+srv://backendconcoxdeveloper:V3jUV7QXqEoAtnhy@cluster0-zhjde.mongodb.net/__CONCOX__?retryWrites=true&w=majority"
                }
         query: name: Status

         response: {[id: deviceID, location:[50 location points]]}

- Third: template (POST)
         url: https://flipr-backend-assignment.herokuapp.com/location
         body: {
                    "address": ["Plot No:1, Sadarpur, Sector-45, Noida, Uttar Pradesh 201303, India", "New Link Road, Behind Infinity Mall, Andheri West, Mumbai, Maharashtra 400053, India", "D-002, Sector 75 Road, Sector 75, Noida, Uttar Pradesh 201301, India", "Ambrahi Village, Sector 19 Dwarka, Dwarka, Delhi, 110075, India","PlotNo53,BlockB,Sector56,Gurugram,Haryana122011,India" ]
                }
        
        response: {[add: address provided, location: [latitude, longitude]]}

```

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