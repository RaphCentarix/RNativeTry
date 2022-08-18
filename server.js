const path = require('path');
//const cors = require('cors');
const express = require('express');

const app = express(); // create express app
//app.use(cors());

const bodyParser = require('body-parser');
const { rmSync } = require('fs');
app.use(bodyParser.json());

// add middlewares
const root = require('path').join(__dirname, 'TestApp/web/dist');
app.use(express.static(root));



app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'TestApp/web/dist', 'index.html'));

   //res.download(path.join(__dirname,'TestApp/android/app/build/outputs/apk/release/app-release.apk'));
});

// start express server on port 5000
app.listen(process.env.PORT || 8081, () => {
  console.log('server started');
  console.log(__dirname);
});