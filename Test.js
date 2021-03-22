const RandomElementArray = require("./RandomElementsArray");
const RandomNumber = require("./RandomNumber");
let question = document.getElementById("question"); // Вопрос (Пример)
let answers = document.getElementById("answers"); // Ответы

class Test { //Класс - Тест
    constructor(number1,number2,answer1,answer2) {
        this.ArrayAnswer = [];   //пустой массив
        this._correct_answer = 0;  // правильный ответ
        this.number1 = number1;   // первое число для подсчета/вопроса
        this.number2 = number2;   // второе число для подсчета/вопроса
        this.answer1 = answer1;   // первый ответ для вывода
        this.answer2 = answer2;   // второй ответ для вывода
        do{                                       // чтобы не было одинаковых ответов
            this.answer1 = Math.floor(this.answer2 + (this.answer2 / 100 * RandomNumber(25,100))); //округляем ((2-е число) + (от 25% до 100% 2-го числа - рандом))
        }
        while((this.answer1 == this.answer2) || (this.answer1 == this._correct_answer))
    }

    CreateTest(option){
        if (option == "+"){
            question.innerHTML = this.number1 + "+" + this.number2 + "="; // выводим вопрос
            this._correct_answer = this.number1+this.number2;              // считаем сумму
        }
        if(option == "-"){
            if(this.number1 < this.number2){ // чтобы ответ не получился с минусом, можно и убрать эту проверку
                this.number1 = Math.floor(this.number2 + (this.number2 / 100 * RandomNumber(25,100))); // уменьшаемое (1-ое число) = округляем ((2-е число) + (от 25% до 100% 2-го числа - рандом))
            }
            this._correct_answer = this.number1-this.number2;              // считаем вычитание
            question.innerHTML = this.number1 + "-" + this.number2 + "="; // выводим вопрос
        }
        if(option == "*"){
            question.innerHTML = this.number1 + "∙" + this.number2 + "="; // выводим вопрос
            this._correct_answer = this.number1*this.number2;              // считаем умножение
        }
        if(option == ":"){
            do{                                       // чтобы не было остатка, можно и убрать эту проверку
                this.number1 = RandomNumber(1,200);
                this.number2 = RandomNumber(1,200);
            }
            while(this.number1%this.number2 != 0)
            this._correct_answer = this.number1/this.number2;              // считаем деление
            question.innerHTML = this.number1 + ":" + this.number2 + "="; // выводим вопрос
        }
        this.ArrayAnswer.push(this._correct_answer,this.answer1,this.answer2); // заполняем массив
        RandomElementArray(this.ArrayAnswer);                                 // вызов функции на рандом элементов массива (меняем местами)
        for (let i = 0; i <  this.ArrayAnswer.length; i++) {                  // выводим варианты ответов
            answers.innerHTML += "<div class='col'><button class='buttons_answers'>"+ this.ArrayAnswer[i] + "</button></div>";
        }
    }
    get correct_answer(){
        return this._correct_answer;
    }
}
module.exports = Test ;