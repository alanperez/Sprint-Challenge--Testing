const express = require('express');
const Games = require('../games/games.js');
const server = express();

server.use(express.json());

server.get('/', (req,res) => {
    res.send('<h1>TESTING!!</h1>')
});

server.get('/games', async (req,res) => {
    try {
        const games = await Games.getAll();
        res.status(200).json(games)

    } catch (error) {
        res.status(500).json({ error: 'WAS HANNEN?' })
    }
});

server.post('/games', async (req,res) => {
    const { title, genre } = req.body;

    if (!title || !genre) {
        return res.status(422).json({ message: "YO PUT IN THE INFO"})
    }

    try {
        const games = await Games.insert(req,body)
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ error: 'WAS HANNEN? YOU GOT AN ERROR'})
    }
})

module.exports = server;