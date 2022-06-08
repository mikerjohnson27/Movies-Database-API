const express = require('express');

const PORT = 3001;

const app = express();

// POST request for reviews
app.get('/api/movies', (req, res) => {
    res.json(`${req.method} request received to add a review`);
  
    console.info(`${req.method} request received to add a review`);
  });

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);