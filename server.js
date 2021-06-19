const express = require("express")
const app  = express();
const mongoose = require("mongoose")
const Devices = require("./models/devices")
const Status = require("./models/status")
const NodeGeocoder = require('node-geocoder');

app.use(express.json())

app.post("/:name", (req,res) =>{
    let url = req.body.url;
    mongoose.connect(url,
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



            // {
            //     "_id": "5c4592a043ecb6530de638af",
            //     "id": "C2",
            //     "imei": "0358739053370541",
            //     "sim": "26",
            //     "tel": "5755080017074",
            //     "createdAt": "2019-01-21T09:36:32.077Z",
            //     "client": "proconnect"
            // },
            
            
        })
})


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
// connecting a database


// creation of a server
app.listen(1000, ()=> console.log("server started at port 1000"))