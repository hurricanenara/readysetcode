const express = require('express');
const app = express();
// const bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
const dreamTeamRouter = require('./api/team');
// const dreamTeamRouter = express.Router();

app.use(express.static('public'));
app.use('/dreamteam', dreamTeamRouter);

const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

