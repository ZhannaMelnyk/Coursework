require('dotenv-expand')(require('dotenv').config());
const express = require('express');
const cors = require('cors');
require('./config/dbConfig');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const routes = require('./routes/index');
routes(app);

app.use('/', express.static('./client/dist'));

const port = process.env.SERVER_PORT;
app.listen(port, () => {});

express.app = app;