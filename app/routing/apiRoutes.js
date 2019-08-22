const friends = require("../data/friends");

const path = require("path");
const friends = ("../data/friends.js")

module.exports= function(app){
    app.get("/api/friends", function(request,response){
        response.json(friends);
    })

    app.post("/api/friends", function(request,response){
        
    })
}