var sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + "<< My favorite!");
    }
    else {
        console.log(tempSport);
    }
}
sportsOne.forEach(function (sport) { return console.log(sport); });
