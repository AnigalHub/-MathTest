const RandomElementArray = require("./RandomElementsArray");
const RandomNumber = require("./RandomNumber");
let question = document.getElementById("question"); // Вопрос (Пример)
let answers = document.getElementById("answers"); // Ответы

class Test { //Класс - Тест
    constructor(number1,number2,answer1,answer2) {
        this.ArrayAnswer = [];   //пустой массив
        this._correct_answer = 0;  // правильный ответ
        this._number1 = number1;   // первое число для подсчета/вопроса
        this._number2 = number2;   // второе число для подсчета/вопроса
        this._answer1 = answer1;   // первый ответ для вывода
        this._answer2 = answer2;   // второй ответ для вывода
        do{                                       // чтобы не было одинаковых ответов
            this._answer1 = Math.floor(this._answer2 + (this._answer2 / 100 * RandomNumber(25,100))); //округляем ((2-е число) + (от 25% до 100% 2-го числа - рандом))
        }
        while((this._answer1 == this._answer2) || (this._answer1 == this._correct_answer))
    }

    CreateTest(option){
        if (option == "+"){
            question.innerHTML = this._number1 + "+" + this._number2 + "="; // выводим вопрос
            this._correct_answer = this._number1+this._number2;              // считаем сумму
        }
        if(option == "-"){
            if(this._number1 < this._number2){ // чтобы ответ не получился с минусом, можно и убрать эту проверку
                this._number1 = Math.floor(this._number2 + (this._number2 / 100 * RandomNumber(25,100))); // уменьшаемое (1-ое число) = округляем ((2-е число) + (от 25% до 100% 2-го числа - рандом))
            }
            this._correct_answer = this._number1-this._number2;              // считаем вычитание
            question.innerHTML = this._number1 + "-" + this._number2 + "="; // выводим вопрос
        }
        if(option == "*"){
            question.innerHTML = this._number1 + "∙" + this._number2 + "="; // выводим вопрос
            this._correct_answer = this._number1*this._number2;              // считаем умножение
        }
        if(option == ":"){
            do{                                       // чтобы не было остатка, можно и убрать эту проверку
                this._number1 = RandomNumber(1,200);
                this._number2 = RandomNumber(1,200);
            }
            while(this._number1%this._number2 != 0)
            this._correct_answer = this._number1/this._number2;              // считаем деление
            question.innerHTML = this._number1 + ":" + this._number2 + "="; // выводим вопрос
        }
        this.ArrayAnswer.push(this._correct_answer,this._answer1,this._answer2); // заполняем массив
        RandomElementArray(this.ArrayAnswer);                                 // вызов функции на рандом элементов массива (меняем местами)
        for (let i = 0; i <  this.ArrayAnswer.length; i++) {                  // выводим варианты ответов
            answers.innerHTML += "<div class='col'><button class='buttons_answers'>"+ this.ArrayAnswer[i] + "</button></div>";
        }
    }
    get correct_answer(){
        return this._correct_answer;
    }
    get number1(){
        return this._number1;
    }
    get number2(){
        return this._number2;
    }
    get answer1(){
        return this._answer1;
    }
    get answer2(){
        return this._answer2;
    }
}
module.exports = Test ;