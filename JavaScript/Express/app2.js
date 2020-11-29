const express = require('express');
const app = express();

const PORT = 4001;

const obj = {
    page: 'main',
};

app.use(express.static('public'));

app.use((req, res, next) => {
    console.log(`${req.method} Request Received`);
    next();
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.get('/', (req, res, next) => {
    res.send(obj);
})