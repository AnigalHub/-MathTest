const TimeСounter = require("./TimeCounter");
const RandomNumber = require("./RandomNumber");
const Test = require("./Test");
let timeCounter = new TimeСounter();
let test = new Test(RandomNumber(0,500),RandomNumber(0,500),3,RandomNumber(0,500));

// Поиск верного ответа
function Search(score){

    for (let i = 0; i <  test.ArrayAnswer.length; i++) {
        document.getElementsByClassName("but")[i].addEventListener('click', function() {

            if (document.getElementsByClassName("but")[i].innerHTML == test.sum){
                document.getElementsByClassName("but")[i].style.background = "green";
                score++;
                document.getElementById("score").innerHTML = "Ваш ответ верный, общее количество очков:" + score;
            }
            else{
                document.getElementsByClassName("but")[i].style.background = "red";
                document.getElementById("score").innerHTML = "Ваш ответ неверный, общее количество очков:" + score;
                score;
            }
            timeCounter.StopTimeСounter();
            document.getElementById("next").style.display = "block";
            return score;
        });
    }

}
let rout = 0;
//управление игрой - Начать игру
document.getElementById('start').addEventListener('click', function() {
    timeCounter.StartTimeСounter(10);                          // вызов таймера
    test.CreateTest();                                                    // вызов вопроса со списком ответов
    document.getElementById("game").style.display = "none";      // убираем название игры
    document.getElementById("start").style.display = "none";     // убираем кнопку - "начать игру"
    document.getElementById("playing_field").style.display = "block"; // выводим поле игры
    document.getElementById("stop").style.display = "block";      // выводим кнопки управления
    document.getElementById("return").style.display = "block";    // "Возврат" и "Остановить"
    document.getElementById("time").style.display = "block";    // выводим таймер
    console.log("число для функции = " + rout);
    Search(rout); // вызов функции на поиск верного ответа
});


//Следующий пример - Далее
document.getElementById('next').addEventListener('click', function() {
    document.getElementById("answers").innerHTML = null;
    test = new Test(RandomNumber(0,5),RandomNumber(0,500),RandomNumber(0,500),1);
    timeCounter.StartTimeСounter(timeCounter.StopTimeСounter()); // вызов метода на продолжение  таймера с момента останова
    test.CreateTest();
    console.log("число для функции = " + rout);
    for (let i = 0; i <  test.ArrayAnswer.length; i++) {
        document.getElementsByClassName("but")[i].addEventListener('click', function() {
        if (document.getElementsByClassName("but")[i].innerHTML == test.sum) {
            rout++;}
        });
    }
    Search(rout);


   // вызов функции на поиск верного ответа
     // вызов функции на поиск верного ответа
});

//остановить
document.getElementById('stop').addEventListener('click', function() {
    timeCounter.StopTimeСounter();                                       // вызов метода на остановку таймера
    document.getElementById("myModal").style.display = "block"; // выводим сообщение об остановке игры

});

//продолжить
document.getElementsByClassName("close")[0].addEventListener('click', function() {
    timeCounter.StartTimeСounter(timeCounter.StopTimeСounter());        // вызов метода на продолжение  таймера с момента останова
    document.getElementById("myModal").style.display = "none"; // убираем сообщение об остановке игры
});

//выйти из игры
document.getElementById('return').addEventListener('click', function() {
    document.getElementById("game").style.display = "block";         // возврат на начало
    document.getElementById("start").style.display = "block";       // выводим название игры и кнопку "начать игру"
    document.getElementById("playing_field").style.display = "none"; // прячем игровое поле
    timeCounter.StartTimeСounter(10);
    document.getElementById("answers").innerHTML = null;
    test = new Test(RandomNumber(0,500),RandomNumber(0,500),RandomNumber(0,500),RandomNumber(0,500));
    document.getElementById("score").innerHTML = null;
    rout = 0;
});
