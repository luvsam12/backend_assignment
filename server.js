const express = require("express")
const mongoose = require("mongoose")
const Devices = require("./models/devices")
const Status = require("./models/status")
const NodeGeocoder = require('node-geocoder');
const app = express();

//Middleware

app.use(express.json()) //to parse the body form the url endpoint


// Routes

// @route    POST /devices/:params
// @desc     Post mongo url, collection in form of params and query and will return 30 devices with 50 location
// @access   Public
// to use:   url=> http://localhost:1000/devices/Devices
//           params=> {/Devices , from the endpoint is used as params}
//           body=> {url: mongodb url with the db mane to be used}
//           query=> name: Status
// response: {[devices + location]}


app.post("/devices/:name", (req,res) =>{
    let url = req.body.url;
    //Connect to Mongo
    mongoose
        .connect( url,
                  { useNewUrlParser: true,
                    useUnifiedTopology: true })
        .then(() => {
            console.log("DB connected")
            console.log(req.params.name)
            let d = req.params.name
            // if(d === 'Devices'){
            //     Devices.find().then((data) => {
            //         data = data.splice(1,30)
            //         // data = data.map(cur => {
            //         //     Status.findOne({imei: cur.imei})
            //         //     .then(data => data)
            //         // })
            //         res.json({success: true, data: data})
            //         // res.json({success: true, data: data})
            //     } 
            //     )
            // }

            Status.find()
                  .then(data => {
                     res.json({success: true, data: data})
                  })
        })
})


// @route    POST /location
// @desc     Post latitude and longitude wrt address provided in body
// @access   Public
// to use:   url=> http://localhost:1000/location
//           body=> {[array of address (string)]}
// response: {[add: (address passed in body), location [latitude, longitude]]}

 app.post("/location", async (req,res) => {

    let arr = req.body.address
    let response = []
    console.log("hello")
    var options = {
        provider: 'google',
      
        // Optionnal depending of the providers
        httpAdapter: 'https', 
        apiKey: 'AIzaSyA5bwbEsAOUMOI4RK2zXcIayG4vjuQSpcw', 
        formatter: null
      };
      
      var geocoder = NodeGeocoder(options);
      
      // Or using Promise
      for(var i=0;i<arr.length;i++){
        await geocoder.geocode(arr[i])
                .then(function(result) {
                    console.log(result);
                    let data = {
                        add: result[0].formattedAddress,
                        location:[result[0].latitude,result[0].longitude]
                    }
                    response.push(data);
                })
                .catch(function(err) {
                console.log(err);
                });
      }

      res.json({success: true, data: response})
      

})



// creation of a server
app.listen(1000, ()=> console.log("server started at port 1000"))