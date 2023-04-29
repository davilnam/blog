const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const { initWebRoute } = require('./router')

const app = express();
const PORT = process.env.port || 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// cors
app.use(cors());

// connect db
const connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/blog');
        console.log("Connect DB success");
    } catch (error) {
        console.log("Connect DB failed");
    }
}
connect();

// route
initWebRoute(app);

app.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
})