const Joke = require('../models/jokes.model');

//get random joke
module.exports.getRandomJoke = (req, res) => {
        let randomID = Math.floor(Math.random() * 5) + 1;
        Joke.find()
            .then(allJokes => res.json({jokes: 
                (   allJokes[Math.floor(Math.random() * allJokes.length) + 1] )
            }))
            .catch(err => res.json({message : 'error fetching', error : err}))
    };
    

//get all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({message : 'error fetching', error : err}))
};

//get one joke
module.exports.findOneJoke = (req,res) =>{
    Joke.findOne({_id: req.params.id})
        .then(oneJoke => res.json({joke:oneJoke}))
        .catch(err => res.json({message: 'error fetching', error:err}))
};

//create a joke
module.exports.createJoke = (req,res) =>{
    Joke.create(req.body)
        .then(newJoke => res.json ({joke:newJoke}))
        .catch(err=> res.json({message: 'error creating joke', error:err}))
};
//update joke
module.exports.updateOneJoke = (req,res) =>{
    Joke.findOneAndUpdate({_id: req.params.id}, req.body,{new:true, runValidators:true})
        .then(updatedJoke => res.json({results:updatedJoke}))
        .catch(err=> res.json({message: 'err updating joke', error:err}))
};
//delete
module.exports.deleteAJoke = (req,res) =>{
    Joke.findByIdAndDelete(req.params.id)
        .then(deletedJoke => {
            res.json({result:deletedJoke})
        })
            
        .catch(err=> res.json({message: 'error deleting joke', error:err}))
}

/**jokes assignment modukes */
