const TimeСounter = require("./TimeCounter");
const RandomNumber = require("./RandomNumber");
const Test = require("./Test");
let timeCounter = new TimeСounter();
let test = new Test(RandomNumber(0,50),RandomNumber(1,50),RandomNumber(0,50),RandomNumber(0,50));
let name_game = document.getElementById("name_game"); //название игры
let start_game = document.getElementById('start');// "Сложение"
let start_game2 = document.getElementById('start2');// "Вычитание"
let start_game3 = document.getElementById('start3');// "Умножение"
let start_game4 = document.getElementById('start4');// "Деление"
let output_count = document.getElementById("score"); // баллы за один пример
let stop_game = document.getElementById("stop"); // "Остановить"
let return_game = document.getElementById('return'); // "Возврат" (на начало)
let modal_window = document.getElementById("myModal"); // Модальное окно "Игра приостановлена"
let playing_filed = document.getElementById("playing_field"); // игровое поле
let timer = document.getElementById("time"); // таймер
let time = 50 // время таймера
let finish = document.getElementById("finish"); // "Завершить"
let choice_answer = document.getElementById("current_answer"); //выбранный ответ
let sum_score = 0; //сумма баллов





// Поиск верного ответа и Подсчет суммы баллов
function SearchAnswersAndSumScore(count){
    for (let i = 0; i <  test.ArrayAnswer.length; i++) {
        document.getElementsByClassName("buttons_answers")[i].addEventListener('click', function() {
            if (document.getElementsByClassName("buttons_answers")[i].innerHTML == test.correct_answer){ // проверка на правильный ответ
                document.getElementsByClassName("buttons_answers")[i].style.background = "green";
                count++;
                sum_score++;
                output_count.innerHTML = "Ваш ответ верный, общее количество очков:" + count;
                choice_answer.innerHTML = test.correct_answer;
                choice_answer.style.color = "green";
            }
            else if (document.getElementsByClassName("buttons_answers")[i].innerHTML == test.answer1){ // проверка первый непрвильный ответ
                document.getElementsByClassName("buttons_answers")[i].style.background = "red";
                choice_answer.innerHTML = test.answer1;
                choice_answer.style.color = "red";
                output_count.innerHTML = "Ваш ответ неверный, общее количество очков:" + count;
            }
            else{                                                                                           // второй непрвильный ответ
                document.getElementsByClassName("buttons_answers")[i].style.background = "red";
                choice_answer.innerHTML = test.answer2;
                choice_answer.style.color = "red";
                output_count.innerHTML = "Ваш ответ неверный, общее количество очков:" + count;
            }
            document.getElementById("answers").innerHTML = null;
            timeCounter.StopTimeСounter();
            document.getElementById('next_question').style.display = "block";
            return count;
        });
    }
    document.getElementById("sum_score").innerHTML = "Ваши очки составили:" + sum_score;
}

//Начало игры
function StartGame(){
    timeCounter.StartTimeСounter(time);// вызов таймера
    document.getElementById('current_answer').style.display = "initial";
    name_game.style.display = "none";      // убираем название игры
    start_game.style.display = "none";     // убираем кнопку - "начать игру"
    start_game2.style.display = "none";     // убираем кнопку - "начать игру"
    start_game3.style.display = "none";     // убираем кнопку - "начать игру"
    start_game4.style.display = "none";     // убираем кнопку - "начать игру"
    playing_filed.style.display = "block"; // выводим поле игры
    stop_game.style.display = "block";      // выводим кнопки управления
    return_game.style.display = "block";    // "Возврат" и "Остановить"
    finish.style.display = "block";    // "Завершить"
    timer.style.display = "block";    // выводим таймер
}
function Discharge() { // Сброс
    name_game.style.display = "flex";         // возврат на начало
    start_game.style.display = "block";       // выводим название игры и кнопку "начать игру"
    start_game2.style.display = "block";       // выводим название игры и кнопку "начать игру"
    start_game3.style.display = "block";       // выводим название игры и кнопку "начать игру"
    start_game4.style.display = "block";       // выводим название игры и кнопку "начать игру"
    playing_filed.style.display = "none";     // прячем игровое поле
    timeCounter.StartTimeСounter(time);
    document.getElementById("answers").innerHTML = " ";
    test = new Test(RandomNumber(1,50),RandomNumber(1,50),RandomNumber(1,50),RandomNumber(1,50));
    document.getElementById("score").innerHTML = " ";
    document.getElementById("current_answer").innerHTML = "?";
    sum_score = 0;
    document.getElementById("myModal2").style.display = "none";

}

//Сложение
document.getElementById('start').addEventListener('click', function() {
    StartGame();
    test.CreateTest("+");                   // вызов вопроса на сложение со списком ответов
    SearchAnswersAndSumScore(sum_score);          //вызов функции на поиск ответа и суммы баллов
});
//Вычитание
document.getElementById('start2').addEventListener('click', function() {
    StartGame();
    test.CreateTest("-");                   // вызов вопроса на вычитание со списком ответов
    SearchAnswersAndSumScore(sum_score);          //вызов функции на поиск ответа и суммы баллов
});
//Умножение
document.getElementById('start3').addEventListener('click', function() {
    StartGame();
    test.CreateTest("*");                   // вызов вопроса на умножение со списком ответов
    SearchAnswersAndSumScore(sum_score);          //вызов функции на поиск ответа и суммы баллов
});
//Деление
document.getElementById('start4').addEventListener('click', function() {
    StartGame();
    test.CreateTest(":");                   // вызов вопроса на деление со списком ответов
    SearchAnswersAndSumScore(sum_score);          //вызов функции на поиск ответа и суммы баллов
});

//Далее
document.getElementById('next_question').addEventListener('click', function() {
    document.getElementById("answers").innerHTML = " ";
    choice_answer.innerHTML = "?";
    choice_answer.style.color = "black";
    test = new Test(RandomNumber(0,50),RandomNumber(1,50),RandomNumber(0,50),RandomNumber(0,50));
    timeCounter.StartTimeСounter(timeCounter.StopTimeСounter()); // вызов метода на продолжение  таймера с момента останова

    if (document.getElementById("question").innerHTML.includes("-") == true){
        test.CreateTest("-");
    }
    if (document.getElementById("question").innerHTML.includes("+") == true){
        test.CreateTest("+");
    }
    if (document.getElementById("question").innerHTML.includes("∙") == true){
        test.CreateTest("*");
    }
    if (document.getElementById("question").innerHTML.includes(":") == true){
        test.CreateTest(":");
    }
    SearchAnswersAndSumScore(sum_score); //вызов функции на поиск ответа и суммы баллов

});

//Остановить
document.getElementById("stop").addEventListener('click', function() {
    timeCounter.StopTimeСounter();         // вызов метода на остановку таймера
    modal_window.style.display = "block"; // выводим сообщение об остановке игры
});

//Продолжить
document.getElementsByClassName("close")[0].addEventListener('click', function() {
    timeCounter.StartTimeСounter(timeCounter.StopTimeСounter());        // вызов метода на продолжение  таймера с момента останова
    modal_window.style.display = "none"; // убираем сообщение об остановке игры
});
//Закрыть модальное окно с подсчетом очков за игру
document.getElementsByClassName("close")[1].addEventListener('click', function() {
    modal_window.style.display = "none"; // убираем сообщение об окончании игры
    Discharge();
});
//Досрочно завершить - "Завершить"
document.getElementById('finish').addEventListener('click', function() {
    document.getElementById("myModal2").style.display = "block";
    timeCounter.StopTimeСounter();
    document.getElementById("sum_score").innerHTML = "Ваши очки составили:" + sum_score;
});


//Выйти из игры - "Возврат"
document.getElementById('return').addEventListener('click', function() {
   Discharge();
});



