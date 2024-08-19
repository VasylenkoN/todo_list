const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./api');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: "Welcome Scylla"
    });
});

app.use('/api', api);

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
