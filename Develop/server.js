const express = require('express');
const PORT = process.env.PORT || 3001;
const data = require('./db/db.json');
const path = require('path');

const app = express();
//middleware
app.use(express.static('public'))

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/notes', (req, res)=>{
    res.sendFile(__dirname + '/public/notes.html');
})

app.get('/api/data', (req, res)=>{
    res.json(data);
  })

  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });