const TimeСounter = require("./TimeCounter");
const RandomNumber = require("./RandomNumber");
const Test = require("./Test");
let timeCounter = new TimeСounter();
let test = new Test(RandomNumber(0,50),RandomNumber(0,50),3,RandomNumber(0,50));
let buttons_answers = document.getElementsByClassName("buttons_answers"); // кнопки с ответами
let output_score = document.getElementById("score"); // количество баллов
let start_game = document.getElementById('start');// "Начать игру"
let stop_game = document.getElementById("stop"); // "Остановить"
let return_game = document.getElementById('return'); // "Возврат" (на начало)
let modal_window = document.getElementById("myModal"); // Модальное окно "Игра приостановлена"
let playing_filed = document.getElementById("playing_field"); // игровое поле
let name_game = document.getElementById("game"); //название игры
let timer = document.getElementById("time"); // таймер
let finish = document.getElementById("finish"); // "Завершить"
let sum_score = 0;


// Поиск верного ответа
function SearchAnswers(score){
    for (let i = 0; i <  test.ArrayAnswer.length; i++) {
        document.getElementsByClassName("buttons_answers")[i].addEventListener('click', function() {
            if (document.getElementsByClassName("buttons_answers")[i].innerHTML == test.sum){
                document.getElementsByClassName("buttons_answers")[i].style.background = "green";
                score++;
                output_score.innerHTML = "Ваш ответ верный, общее количество очков:" + score;
                document.getElementById("current_answer").innerHTML = test.sum;
                document.getElementById("current_answer").style.color = "green";
            }
            else if (document.getElementsByClassName("buttons_answers")[i].innerHTML == test.answer1){
                document.getElementsByClassName("buttons_answers")[i].style.background = "red";
                document.getElementById("current_answer").innerHTML = test.answer1;
                document.getElementById("current_answer").style.color = "red";
                output_score.innerHTML = "Ваш ответ неверный, общее количество очков:" + score;
            }
            else{
                document.getElementsByClassName("buttons_answers")[i].style.background = "red";
                document.getElementById("current_answer").innerHTML = test.answer2;
                document.getElementById("current_answer").style.color = "red";
                output_score.innerHTML = "Ваш ответ неверный, общее количество очков:" + score;
            }


            document.getElementById("answers").innerHTML = null;
            timeCounter.StopTimeСounter();
            document.getElementById('next_question').style.display = "block";
            return score;
        });
    }
}
//Подсчет баллов
function Sum(sum){
    for (let i = 0; i <  test.ArrayAnswer.length; i++) {
        document.getElementsByClassName("buttons_answers")[i].addEventListener('click', function() {
            if (document.getElementsByClassName("buttons_answers")[i].innerHTML == test.sum) {
                sum++;}
        });
    }
    SearchAnswers(sum); //вызов функции на поиск ответа
}


//управление игрой - Начать игру
document.getElementById('start').addEventListener('click', function() {
    timeCounter.StartTimeСounter(5);// вызов таймера
    test.CreateTest();                   // вызов вопроса со списком ответов
    document.getElementById('current_answer').style.display = "initial";
    name_game.style.display = "none";      // убираем название игры
    start_game.style.display = "none";     // убираем кнопку - "начать игру"
    playing_filed.style.display = "block"; // выводим поле игры
    stop_game.style.display = "block";      // выводим кнопки управления
    return_game.style.display = "block";    // "Возврат" и "Остановить"
    finish.style.display = "block";    // "Завершить"
    timer.style.display = "block";    // выводим таймер
    for (let i = 0; i <  test.ArrayAnswer.length; i++) {
        document.getElementsByClassName("buttons_answers")[i].addEventListener('click', function() {
            if (document.getElementsByClassName("buttons_answers")[i].innerHTML == test.sum) {
                sum_score++;}
        });
    }
    SearchAnswers(sum_score); //вызов функции на поиск ответа
    document.getElementById("sum_score").innerHTML = "Ваши очки составили:" + sum_score;
});


//Следующий пример - Далее
document.getElementById('next_question').addEventListener('click', function() {
    document.getElementById("answers").innerHTML = null;
    document.getElementById("current_answer").innerHTML = "?";
    document.getElementById("current_answer").style.color = "black";
    test = new Test(RandomNumber(0,5),RandomNumber(0,500),RandomNumber(0,500),1);
    timeCounter.StartTimeСounter(timeCounter.StopTimeСounter()); // вызов метода на продолжение  таймера с момента останова
    test.CreateTest();
    for (let i = 0; i <  test.ArrayAnswer.length; i++) {
        document.getElementsByClassName("buttons_answers")[i].addEventListener('click', function() {
            if (document.getElementsByClassName("buttons_answers")[i].innerHTML == test.sum) {
                sum_score++;}
        });
    }
    SearchAnswers(sum_score); //вызов функции на поиск ответа
    document.getElementById("sum_score").innerHTML = "Ваши очки составили:" + sum_score;
});



//остановить
document.getElementById("stop").addEventListener('click', function() {
    timeCounter.StopTimeСounter();         // вызов метода на остановку таймера
    modal_window.style.display = "block"; // выводим сообщение об остановке игры
});

//продолжить
document.getElementsByClassName("close")[0].addEventListener('click', function() {
    timeCounter.StartTimeСounter(timeCounter.StopTimeСounter());        // вызов метода на продолжение  таймера с момента останова
    modal_window.style.display = "none"; // убираем сообщение об остановке игры
});
//продолжить
document.getElementsByClassName("close")[1].addEventListener('click', function() {
    modal_window.style.display = "none"; // убираем сообщение об остановке игры
    Discharge();
});

//выйти из игры
document.getElementById('return').addEventListener('click', function() {
   Discharge();
});

function Discharge() { // функция сброса
    name_game.style.display = "block";         // возврат на начало
    start_game.style.display = "block";       // выводим название игры и кнопку "начать игру"
    playing_filed.style.display = "none";     // прячем игровое поле
    timeCounter.StartTimeСounter(5);
    document.getElementById("answers").innerHTML = null;
    test = new Test(RandomNumber(0,50),RandomNumber(0,50),RandomNumber(0,50),RandomNumber(0,50));
    document.getElementById("score").innerHTML = null;
    document.getElementById("current_answer").innerHTML = "?";
    sum_score = 0;
    document.getElementById("myModal2").style.display = "none";
}

