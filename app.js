const mongoose = require('mongoose');
const express = require('express');
const app = express();
const movieRouter = require('./movieRoutes');
const path = require('path');

app.use(express.json());
app.use(movieRouter);


mongoose.connect('mongodb://127.0.0.1:27017/movie', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then(res => {
    console.log(res);
    console.log('Connected to server');
    (function () {
        app.listen(3000, () => {
            console.log('Serving on port 3000');
        });
    })();
})
    .catch(e => console.log(e));