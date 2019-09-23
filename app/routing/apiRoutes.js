const friends = require("../data/friends");

const path = require("path");
const friends = ("../data/friends.js")

module.exports= function(app){
    app.get("/api/friends", function(request,response){
        response.json(friends);
    })

    app.post("/api/friends", function(request,response){
        console.log(request.body.scores)
        const user = req.body;

        for(let i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
          }
          const bestFriendIndex = 0;
          const minimumDifference = 30;

          for(let i = 0; i < friends.length; i++) {
            let totalDifference = 0;
            for(let j = 0; j < friends[i].scores.length; j++) {
              let difference = Math.abs(user.scores[j] - friends[i].scores[j]);
              totalDifference += difference;
            }

            if(totalDifference < minimumDifference) {
                bestFriendIndex = i;
                minimumDifference = totalDifference;
              }
            }  
            friends.push(user);
         res.json(friends[bestFriendIndex]);



    })
}