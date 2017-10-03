const express = require('express');
const PORT = process.env.PORT || 3000;

var app = express();

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is up on PORT ${PORT}`);
});
