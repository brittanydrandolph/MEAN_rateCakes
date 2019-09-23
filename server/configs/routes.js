const cupcake = require("../controllers/cakes");

module.exports = function(app){
    app.get("/ratemycupcakes", cupcake.index)
    app.post("/ratings/:cakeId", cupcake.addRating)
    app.post("/ratemycupcakes", cupcake.bakeCake)
    app.get("ratemycakes/:id", cupcake.details)
}

