const express = require('express');
const PORT = process.env.PORT || 3001;
const data = require('./db/db.json');


const app = express();

app.get('/html', (req, res) =>{
    res.sendFile(__dirname + '/public/index.html');
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