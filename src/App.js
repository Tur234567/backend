const express = require("express");
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");
const userRoute = require("./routes/users");
const bookRoute = require('./routes/books')
const corsOption = require('./middleware/cors')
// const loggerone = require('./middleware/loggerone');
// const loggertwo = require('./middleware/loggertwo');

dotenv.config();

const {
  PORT = 3005,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/backend",
} = process.env;

mongoose.connect(MONGO_URL);

const app = express();
let corsOptions = {
  origin : [API_URL],
}

app.use(cors(corsOptions))
// app.use(loggerone);
// app.use(loggertwo);
app.use(corsOption)
app.use(bodyParser.json());
app.use(bookRoute);
app.use(userRoute);

app.listen(PORT, function () {
  console.log(`CORS-enabled, Ссылка на сервер: ${API_URL}:${PORT} `)
})