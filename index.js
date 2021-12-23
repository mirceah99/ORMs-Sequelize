require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});

app.get('/', (req, res) =>{
    res.send('Express is up!');
});

