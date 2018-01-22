require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , controller = require('./serverCtrl.js')
    , cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(express.static( './public')); //serves front end
app.use(cors());
massive(process.env.CONNECTION_STRING).then(db =>{
   app.set('db', db)}).catch((err)=>console.log(err));



//ENDPOINTS
// app.get('/', function(req, res){
//     res.sendFile(__dirname + '/index.html');
// });
app.get('/getAll', controller.getAll);
// app.get('/getDetails/:ID', controller.getDetails);
app.get('/getImages/:Type', controller.getImages);

app.post('/api/send_email', controller.sendEmail);



const port = process.env.PORT || 3000;
app.listen(port, ( ) => {
  console.log("listening on port: " + port);
});


// SET UP A TEST ENDPOINT
// app.get('/test', (req, res, next)=>{
//   console.log('hello');
//   res.sendStatus(200);
// })
