require('dotenv').config()
const express = require('express');
const db = require('./models');
const app = express();
const port = process.env.PORT || 8080;


// sync database
db.sequelize.sync();

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});

app.get('/', (req, res) =>{
    res.send('Express is up!');
});

