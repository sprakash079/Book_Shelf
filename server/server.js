const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const config = require('./config/config').get(process.env.NODE_ENV);
const app = express();





mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, });



const { User } = require('./models/user');
const { Book } = require('./models/book');
const { Item } = require('./models/Item');



app.use(bodyParser.json());
app.use(cookieParser());

//get//

app.get('/api/getBook', (req, res) => {
    let id = req.query.id;

    Book.findById(id, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.send(doc);
    })
})

app.get('/api/books', (req, res) => {
    // locahost:3000/api/books?skip=3&limit=2&order=asc
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order;

    // ORDER = asc || desc
    Book.find().skip(skip).sort({ _id: order }).limit(limit).exec((err, doc) => {
        if (err) return res.status(400).send(err);
        res.send(doc);
    })
})




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