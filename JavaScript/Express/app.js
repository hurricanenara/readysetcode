const express = require('express');
const app = express();
const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.static('public'));

const dreamTeamRouter = express.Router();

app.use('/dreamteam', dreamTeamRouter);

const dreamTeam = {
    1: {
        name: "Nara",
        dream: "BIG",
        color: "hologram",
    },
    2: {
        name: "PY",
        dream: "HUGE",
        color: "blue",
    },
    3: {
        name: "Rando",
        dream: "Any",
        color: "transparent"
    }
}

const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

dreamTeamRouter.get('/', (req, res, next) => {
    res.send(dreamTeam);
});

dreamTeamRouter.get('/:id', (req, res, next) => {
    const { id } = req.params;
    if (dreamTeam[id]) {
        res.send(dreamTeam[id]);
    } else {
        res.status(404).send("Id not found");
    }
});

dreamTeamRouter.put('/:id', (req, res, next) => {
    const { id } = req.params;
    const teamUpdate = req.query;
    dreamTeam[id] = teamUpdate;
    res.send(dreamTeam[id]);
});

dreamTeamRouter.post('/', (req, res, next) => {
    const ids = Object.keys(dreamTeam);
    const newId = +ids[ids.length - 1] + 1;
    const newMember = req.query;
    dreamTeam[newId] = newMember;
    res.send(req.query);
});

dreamTeamRouter.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    if (dreamTeam.hasOwnProperty(id)) {
        delete dreamTeam[id];
    } else {
        res.status(404).send(`Team member with id ${id} does not exist.`)
    }
});