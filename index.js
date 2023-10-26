const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const nft = require('./routes/nft');
//check health
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/nft',nft);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
