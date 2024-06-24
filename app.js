const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {
  route
} = require('./route/router');
const mongoose = require('mongoose');


const app = express()
// parse application/x-www-form-urlencoded
// parse application/json
app.use(bodyParser.json())
// console.log("use");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.set('layout', 'layout/app');

mongoose.connect('mongodb://127.0.0.1:27017/inter', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use('/', route)
// app.use('/',route)


app.listen(5000, () => {
  console.log(`Example app listening on port`)
})

