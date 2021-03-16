const RandomElementArray = require("./RandomElementsArray");
class Test { //Класс - Тест
    constructor(number1,number2,answer1,answer2) {
        this.ArrayAnswer = [];   //пустой массив
        this.sum = 0;            // сумма чисел
        this.number1 = number1;   // первое число для подсчета/вопроса
        this.number2 = number2;   // второе число для подсчета/вопроса
        this.answer1 = answer1;   // первый ответ для вывода
        this.answer2 = answer2;   // второй ответ для вывода
    }
    CreateTest(){
        document.getElementById("question").innerHTML = this.number1 + "+" + this.number2 + "="; // выводим вопрос
        this.sum = this.number1+this.number2;                                 // считаем сумму чисел
        this.ArrayAnswer.push(this.sum,this.answer1,this.answer2);            // заполняем массив
        RandomElementArray(this.ArrayAnswer);                                 // вызов функции на рандом элементов массива (меняем местами)
        for (let i = 0; i <  this.ArrayAnswer.length; i++) {                  // выводим варианты ответов
           document.getElementById("answers").innerHTML += "<div class='col'><button class='buttons_answers'>"+ this.ArrayAnswer[i] + "</button></div>";
         }

    }
}
module.exports = Test ;