const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authrouter = require("./routes/userroutes");

mongoose.connect("mongodb://localhost:27017/Coupon", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
}); 

db.once("open", () => {
    console.log("connected to database");
});

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", authrouter);

const Port = 6000;
app.listen(Port, () => {
    console.log(`server is running on port ${Port}`);
});
