const express = require("express");
const app = express();
const port = 8000;
require("./server/config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));

const routes = require('./server/routes/jokes.routes')
routes(app)


app.listen(8000, () => console.log("The server is all fired up on port 8000"));
