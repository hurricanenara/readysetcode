const express = require('express');
const app = express();

const PORT = 4001;

app.use(express.static('public'));

app.use((req, res, next) => {
    console.log(`${req.method} Request Received`);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});