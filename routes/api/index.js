const apiRoutes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
//utils used for managing the db files
const { readFromFile, readAndAppend } = require("../../helper/fsUtils");

// GET route for sending all the note objects as json
apiRoutes.get('/notes', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST route for making a new note
apiRoutes.post('/notes', (req, res) => {

    //destructuring req.body
    const { title, text } = req.body;

    // guard clause to ensure the request is valid
    if (!(title && text)){ res.status(400).json("Invalid note format.")}

    const noteObj =  {
        id: uuidv4(),
        title: title,
        text: text,        
    };

    readAndAppend(noteObj,'./db/db.json')
    res.json(noteObj)
}

);

module.exports = apiRoutes;

