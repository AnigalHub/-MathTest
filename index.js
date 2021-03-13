
const TimeСounter = require("./TimeCounter");

let timeCounter = new TimeСounter(15);

document.getElementById('stop').addEventListener('click', function() {
    timeCounter.StopTimeСounter();
    document.getElementById("stop").style.display = "none";
    document.getElementById("proceed").style.display = "block";
});
document.getElementById('proceed').addEventListener('click', function() {
    timeCounter.StartTimeСounter();
    document.getElementById("stop").style.display = "block";
    document.getElementById("proceed").style.display = "none";

});
document.getElementById('return').addEventListener('click', function() {
    document.getElementById("start").style.display = "block";
    document.getElementById("playing_field").style.display = "none";
});
document.getElementById('start').addEventListener('click', function() {
    timeCounter.StartTimeСounter();

    this.MassivAnswer = [];
    this.sum = 1;
    this.answer1 = 2;
    this.answer2 = 3;
    this.MassivAnswer.push(this.sum,this.answer1,this.answer2);
    this.MassivAnswer.forEach(e => document.getElementById("body").innerHTML += "<div class='col'><button>"+ e + "</button></div>");
});