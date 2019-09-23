const mongoose = require("mongoose");
const Cake = mongoose.model("Cake");

module.exports = {
    index: function(req, res){
        Cake.find()
        .then(cake => res.json({info: cake, message: "Success on index page!"}))
        .catch(err => res.json ({info: err, message: "Failure on index page!"}))
    },

    bakeCake: function(req, res){
        Cake.create({baker: req.body.baker, image: req.body.image})
            .then(created => res.json({info: created, message:"Successfully added a cupcake!"}))
            .catch(err => res.json({info: err, message: "Failure on bakeCake function!"}))
    },
    addRating: function(req, res){
        console.log(req.body)
        Cake.update({_id: req.params.cakeId}, {$push: {ratings: req.body}}, function(err, data){
            if(err){
                res.json({message: "Error!", info: err});
            }
            else{
                res.json({message: "Success!", info: data});
                    }
                })
            },
    details: function(req, res){
        let id = req.params.id;
        Cake.find({_id: id},function(err, cake){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", cake: cake});
            }
        })
    },
        
}