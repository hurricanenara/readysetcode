const express = require('express');
const app = express();
app.use(express.static('public'));

const dreamTeam = {
    nara: {
        name: "Nara",
        dream: "BIG",
        color: "hologram",
    },
    py: {
        name: "PY",
        dream: "HUGE",
        color: "blue",
    }
}

const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.get('/dreamteam', (req, res, next) => {
    res.send(dreamTeam);
});

app.get('/dreamteam/:name', (req, res, next) => {
    const { name } = req.params;
    if (dreamTeam[name]) {
        res.send(dreamTeam[name]);
    } else {
        res.status(404).send("Name not found");
    }
});

app.put('/dreamteam/:name', (req, res, next) => {
    
})

