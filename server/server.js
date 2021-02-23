const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();





mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected")
})



const { User } = require('./models/user');
const { Book } = require('./models/book');




app.use(bodyParser.json());
app.use(cookieParser());

//get//



//post//
app.post('/api/book', (req, res) => {
        const book = new Book(req.body);
        book.save((err, doc) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({
                post: true,
                bookid: doc._id

            })
        })
    })
    //update//

//delete//


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("successfully connected");

})