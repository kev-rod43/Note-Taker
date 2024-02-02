const htmlRoutes = require('express').Router();
const path = require('path');

// GET Route for homepage
htmlRoutes.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../../public/index.html'))
);

// GET Route for Notes page
htmlRoutes.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../../public/notes.html'))
);

module.exports = htmlRoutes;