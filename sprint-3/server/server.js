const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');


app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cors())




app.listen(port, () => {
    console.log(`This server is listening on the ${port} port`)
});