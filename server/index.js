const express = require("express");
const cors = require("cors");
const app = express();

require('dotenv').config();

const port = process.env.PORT;
const routes = require('../backend/src/routes/index');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: "Welcome"
    })
})

app.use(routes);

app.listen(port, () => {
  console.log(`Now listening at http://localhost:${port}`);
});