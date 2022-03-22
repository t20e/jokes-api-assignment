const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        // required: [true, 'setup is required'],
        minlength: [10, 'setup must be at least 10 characters long!']
    },
    punchline: {
        type: String,
        // required: [true, 'punchline is required'],
        minlength:[ 3, 'punchline must be 3 cahracters long!']
    }
});

const Joke = mongoose.model("joke", JokesSchema);

module.exports = Joke;