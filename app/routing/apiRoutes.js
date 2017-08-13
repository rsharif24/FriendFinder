var friendsData = require("../data/friends");


module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function (req, res) {


    var newFriend = req.body.scores;
    var friendMatch = {
      name: "",
      photo: "",
      matchDiff: 100
    };



    for (var i = 0; i < friendsData.length; i++) {

      totalDifference = 0;

      for (var x = 0; x < newFriend.length; x++) {

        totalDifference += Math.abs(+(newFriend[x]) - +(friendsData[i].scores[x]));

      };

      if (totalDifference < friendMatch.matchDiff) {

        friendMatch.name = friendsData[i].name;
        friendMatch.photo = friendsData[i].photo;
        friendMatch.matchDiff = totalDifference;
      };
    };

    friendsData.push(req.body);
    res.json(friendMatch);

  });

  app.post("/api/clear", function() {

    friendsData = [];
  

  });

};
