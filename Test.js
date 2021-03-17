const RandomElementArray = require("./RandomElementsArray");
const RandomNumber = require("./RandomNumber");
class Test { //Класс - Тест
    constructor(number1,number2,answer1,answer2) {
        this.ArrayAnswer = [];   //пустой массив
        this.correct_answer = 0;  // правильный ответ
        this.number1 = number1;   // первое число для подсчета/вопроса
        this.number2 = number2;   // второе число для подсчета/вопроса
        this.answer1 = answer1;   // первый ответ для вывода
        this.answer2 = answer2;   // второй ответ для вывода
    }

    CreateTest(option){
        if (option == "+"){
            document.getElementById("question").innerHTML = this.number1 + "+" + this.number2 + "="; // выводим вопрос
            this.correct_answer = this.number1+this.number2;                                 // считаем сумму чисел
        }
        if(option == "-"){
            if(this.number1 < this.number2){ // чтобы ответ не получился с минусом, можно и убрать эту проверку
                this.number1 = Math.floor(this.number2 + (this.number2 / 100 * RandomNumber(25,100))); // уменьшаемое (1-ое число) = округляем ((2-е число) + (от 25% до 100% 2-го числа - рандом))
            }
            this.correct_answer = this.number1-this.number2;
            document.getElementById("question").innerHTML = this.number1 + "-" + this.number2 + "="; // выводим вопрос
        }
        if(option == "*"){
            document.getElementById("question").innerHTML = this.number1 + "∙" + this.number2 + "="; // выводим вопрос
            this.correct_answer = this.number1*this.number2;
        }
        if(option == ":"){
            do{                                       // чтобы не было остатка, можно и убрать эту проверку
                this.number1 = RandomNumber(1,200);
                this.number2 = RandomNumber(1,200);
            }
            while(this.number1%this.number2 != 0)
            this.correct_answer = this.number1/this.number2;
            document.getElementById("question").innerHTML = this.number1 + ":" + this.number2 + "="; // выводим вопрос
        }
        this.ArrayAnswer.push(this.correct_answer,this.answer1,this.answer2); // заполняем массив
        RandomElementArray(this.ArrayAnswer);                                 // вызов функции на рандом элементов массива (меняем местами)
        for (let i = 0; i <  this.ArrayAnswer.length; i++) {                  // выводим варианты ответов
           document.getElementById("answers").innerHTML += "<div class='col'><button class='buttons_answers'>"+ this.ArrayAnswer[i] + "</button></div>";
        }
    }
}
module.exports = Test ;