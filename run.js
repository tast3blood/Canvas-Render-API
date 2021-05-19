const express = require('express');
const { readFile } = require('node:fs').promises;
const app = express();

app.get('/', async (req, res) => {
    res.send(await readFile('./public/index.html', 'utf8'));
});

app.use(express.static('./public'));
app.use(express.json());

app.post('/json', (req, res) => {
    console.log(req.body);
})

app.listen(3000);