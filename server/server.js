const debug = true;

d = (msg) => { console.log(`[${getTime()}] ${msg}`) }
//express
const express = require('express');
const app = express();
const port = 5000;

//mongodb
const mongoose = require('mongoose');
const url = 'mongodb+srv://admin:admin@cluster0-10xyk.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
const Project = require('./models/Project');

db.once('open', _ => {
  d('Database connected: ' + url)
})

db.on('error', err => {
  d('connection error: ' + err)
})

app.listen(port, () => {
  d(`Server listening at http://localhost:${port}`);
});

app.get('/hello', (req, res) => {
  res.send({ message: 'Connected to server' });
});

app.get('/search', (req, res) => {
  res.send({ message: 'Search not yet implemented' });
})

app.get('/project/:projectId', (req, res) => {
  res.send({ message: 'Project pages not yet implemented' });
})
app.post('/create', (req, res) => {
  const test = new Project ({
    name: 'Test',
  });
  test.save((error, document) => {
    if (error) console.error(error);
    else res.send({ message: 'OK'});
    console.log(document);
  });
});


function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function getTime() {
  var d = new Date();
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());
  return x = h + ":" + m + ":" + s;
}
