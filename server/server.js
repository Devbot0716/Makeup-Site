const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    // , config = require('./config.js')
    , controller = require('./serverCtrl.js')
    , cors = require('cors');
             require('dotenv').config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(db => app.set('db', db)).catch((err)=>console.log(err));

app.use(express.static('./public'));

// app.get('/test', (req, res, next)=>{
//   console.log('hello');
//   res.sendStatus(200);
// })

//ENDPOINTS
app.get('/getAll', controller.getAll);
app.get('/getDetails/:ID', controller.getDetails);
app.get('/getImages/:Type', controller.getImages);

const port = process.env.PORT || 3000;
app.listen(port, ( ) => {
  console.log("listening on port " + port);
});
