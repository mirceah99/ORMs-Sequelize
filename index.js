require('dotenv').config();
const express = require('express');
const bodyPares = require('body-parser');
const db = require('./models');
const logger = require('./logging/winston');
const routes = require('./routes/index');

const app = express();
const port = process.env.PORT || 8080;

// sync database
db.sequelize.sync();
app.use(bodyPares.json());

app.listen(port, () => {
  logger.info(`Express app listening at http://localhost:${port}`);
});

app.use('/pets', routes.pets);

app.get('/', (req, res) => {
  res.send('Express is up!');
});
