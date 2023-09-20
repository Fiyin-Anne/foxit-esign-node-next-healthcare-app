const express = require("express");
const cors = require("cors");
const { Server } = require('socket.io');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const routes = require('../server/src/routes/index');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: "Welcome"
    })
})

app.use(routes);

const server = app.listen(port, () => {
  console.log(`Now listening at http://localhost:${port}`);
})

const io = new Server(server, {cors: {origin: "*"}});

io.on('connection', (socket) => {
  console.log('connected');
  socket.on('disconnect', () => console.log('Client disconnected'))
});

module.exports = { io };