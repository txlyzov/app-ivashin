const express = require('express');
const HSC = require('http-status-codes');
const cors = require('cors');
const routers = require('./routes');

const app = express();

const HOST = 'localhost';
const PORT = 3000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

//routers
app.use('/', routers.noteRouter);

//errors
app.use((req, res) => {
  res.status(HSC.NOT_FOUND).send('No content found.');
});

app.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}!`));
