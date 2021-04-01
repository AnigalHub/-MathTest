const TimeСounter = require("./TimeCounter");
const RandomNumber = require("./RandomNumber");
const DisplayOfNumbersInMenu = require("./DisplayOfNumbersInMenu");

const Test = require("./Test");
let timeCounter = new TimeСounter();
let time = 60; // время таймера
let test = new Test(RandomNumber(0,50),RandomNumber(1,50),RandomNumber(1,50),RandomNumber(1,50));
let name_game = document.getElementById("name_game"); //название игры
let menu = document.getElementById("menu"); // меню игры
let playing_filed = document.getElementById("playing_field"); // игровое поле
let question = document.getElementById("question"); // Вопрос (Пример)
let selected_answer = document.getElementById("selected_answer"); //выбранный ответ
let answers = document.getElementById("answers"); // Ответы
let output_count = document.getElementById("score"); // счетчик баллов (количество очков)
let next_question = document.getElementById('next_question'); //"Далее"
let modal_window_stop = document.getElementById("ModalWindowStop"); // Модальное окно "Игра приостановлена"
let modal_window_end = document.getElementById("ModalWindowEnd"); // Модальное окно "Игра завершена"
let output_sum_score = document.getElementById("sum_score"); //баллы за всю игру
let sum_score = 0; //сумма баллов



DisplayOfNumbersInMenu();//Вывод цифр в меню (для красоты, с рандомом)

// Поиск верного ответа и Подсчет суммы баллов
function SearchAnswersAndSumScore(count){
    for (let i = 0; i <  test.ArrayAnswer.length; i++) {
        document.getElementsByClassName("buttons_answers")[i].addEventListener('click', function() {
            if (document.getElementsByClassName("buttons_answers")[i].innerHTML == test.correct_answer){ // проверка на правильный ответ
                document.getElementsByClassName("buttons_answers")[i].style.background = "green";
                count++;
                sum_score++;
                output_count.innerHTML = "Ваш ответ" + "<span style='color:green; font-weight: bold;'>" + " верный" + "</span>" +", общее количество очков: " + "<span style='font-weight: bold;'>"+ count + "</span>";
                selected_answer.innerHTML = test.correct_answer;
                selected_answer.style.color = "green";
            }
            else { //проверка первый непрвильный ответ
                document.getElementsByClassName("buttons_answers")[i].style.background = "red";
                selected_answer.innerHTML = document.getElementsByClassName("buttons_answers")[i].innerHTML;
                selected_answer.style.color = "red";
                output_count.innerHTML = "Ваш ответ" + "<span style='color:red;font-weight: bold;'>" + " неверный" + "</span>" +", общее количество очков: "  +"<span style='font-weight: bold;'>" +  count  + "</span>";
            }

            answers.innerHTML = ""; // не выводим предыдущие ответы по прошлому вопросу (примеру)
            timeCounter.StopTimeСounter(); // останавливаем время (таймер)
            next_question.style.display = "block"; // выводим кнопку "Далее"
            return count;
        });
    }
    output_sum_score.innerHTML = "Ваши очки составили:" + sum_score; // выводим сумму очков
}
//Начало игры
function StartGame(){
    timeCounter.StartTimeСounter(time);// вызов таймера
    selected_answer.style.display = "initial";
    name_game.style.display = "none";       // убираем название игры
    menu.style.display = "none"; // убираем меню
    playing_filed.style.display = "block";  // выводим поле игры

}
// Сброс
function Discharge() {
    name_game.style.display = "block";         // возврат на начало - выводим название
    menu.style.display = "flex";              // выводим меню
    playing_filed.style.display = "none";     // прячем игровое поле
    timeCounter.StartTimeСounter(time);
    answers.innerHTML = "";
    test = new Test(RandomNumber(1,50),RandomNumber(1,50),RandomNumber(1,50),RandomNumber(1,50));
    output_count.innerHTML = " ";
    selected_answer.innerHTML = "?";
    selected_answer.style.color = "black";
    sum_score = 0;
    modal_window_end.style.display = "none";
    next_question.style.display = "none";
    DisplayOfNumbersInMenu();
}
//Выбор следующего вопроса
function ChoosingNextQuestion(){
    answers.innerHTML = "";
    output_count.innerHTML = "";
    selected_answer.innerHTML = "?";
    selected_answer.style.color = "black";
    
    if (question.innerHTML.includes("-") == true){
        test.CreateTest("-");
    }
    if (question.innerHTML.includes("+") == true){
        test.CreateTest("+");
    }
    if (question.innerHTML.includes("∙") == true){
        test.CreateTest("*");
    }
    if (question.innerHTML.includes(":") == true){
        test.CreateTest(":");
    }
}

//Сложение
document.getElementById('addition').addEventListener('click', function() {
    StartGame();
    test.CreateTest("+");                                    // вызов вопроса на сложение со списком ответов
    SearchAnswersAndSumScore(sum_score);                            //вызов функции на поиск ответа и суммы баллов
});
//Вычитание
document.getElementById('subtraction').addEventListener('click', function() {
    StartGame();                                                    //вызов функции на старт игры
    test.CreateTest("-");                                     // вызов вопроса на вычитание со списком ответов
    SearchAnswersAndSumScore(sum_score);                            //вызов функции на поиск ответа и суммы баллов
});
//Умножение
document.getElementById('multiplication').addEventListener('click', function() {
    StartGame();                                                     // вызов функции на старт игры
    test.CreateTest("*");                                     // вызов вопроса на умножение со списком ответов
    SearchAnswersAndSumScore(sum_score);                            // вызов функции на поиск ответа и суммы баллов
});
//Деление
document.getElementById('division').addEventListener('click', function() {
    StartGame();                                                     // вызов функции на старт игры
    test.CreateTest(":");                                      // вызов вопроса на деление со списком ответов
    SearchAnswersAndSumScore(sum_score);                             // вызов функции на поиск ответа и суммы баллов
});

//Далее
document.getElementById('next_question').addEventListener('click', function() {
    test = new Test(RandomNumber(0,50),RandomNumber(1,50),RandomNumber(0,50),RandomNumber(0,50));
    timeCounter.StartTimeСounter(timeCounter.StopTimeСounter());       // вызов метода на продолжение  таймера с момента останова
    ChoosingNextQuestion();                                            // вызов функции на выбор следующего вопроса
    SearchAnswersAndSumScore(sum_score);                               // вызов функции на поиск ответа и суммы баллов
});

//Остановить
document.getElementById("stop_game").addEventListener('click', function() {
    timeCounter.StopTimeСounter();                                      // вызов метода на остановку таймера
    modal_window_stop.style.display = "block";                          // выводим сообщение об остановке игры
});

//Продолжить
document.getElementsByClassName("close")[0].addEventListener('click', function() {
    timeCounter.StartTimeСounter(timeCounter.StopTimeСounter());        // вызов метода на продолжение  таймера с момента останова
    modal_window_stop.style.display = "none";                           // убираем сообщение об остановке игры
});
//Закрыть модальное окно с подсчетом очков за игру
document.getElementsByClassName("close")[1].addEventListener('click', function() {
    modal_window_stop.style.display = "none";                           // убираем сообщение об окончании игры
    Discharge();                                                        // вызов функции на сброс игры
});
//Досрочно завершить - "Завершить"
document.getElementById('finish').addEventListener('click', function() {
    modal_window_end.style.display = "block";                          // выводим сообщение об окончании игры
    timeCounter.StopTimeСounter();                                     // вызов метода на остановку таймера
    output_sum_score.innerHTML = "Ваши очки составили:" + sum_score;   // выводим сумму очков
});

//Выйти из игры - "Возврат"
document.getElementById('return_game').addEventListener('click', function() {
   Discharge();                                                        //вызов функции на сброс игры
});



