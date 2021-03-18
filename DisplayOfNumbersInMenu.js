const RandomNumber = require("./RandomNumber");
function DisplayOfNumbersInMenu(){ //Вывод цифр в меню (для красоты, с рандомом)
    let numeric1 = RandomNumber(0,50);
    let numeric2 = RandomNumber(0,50);
    document.getElementsByClassName("numeric1")[0].innerHTML = numeric1; // цифры для сложения
    document.getElementsByClassName("numeric2")[0].innerHTML = numeric2;

    numeric1 = RandomNumber(0,50);
    numeric2 = RandomNumber(0,50);
    document.getElementsByClassName("numeric1")[1].innerHTML = numeric1; // цифры для умножения
    document.getElementsByClassName("numeric2")[1].innerHTML = numeric2;

    numeric1 = RandomNumber(0,50);
    numeric2 = RandomNumber(0,50);
    if(numeric1 < numeric2){
        numeric1 = Math.floor(numeric2 + (numeric2 / 100 * RandomNumber(25,100)));
    }
    document.getElementsByClassName("numeric1")[2].innerHTML = numeric1; // цифры для вычитания
    document.getElementsByClassName("numeric2")[2].innerHTML = numeric2;

    do{
        numeric1 = RandomNumber(1,50);
        numeric2 = RandomNumber(1,50);
        document.getElementsByClassName("numeric1")[3].innerHTML = numeric1; // цифры для деления
        document.getElementsByClassName("numeric2")[3].innerHTML = numeric2;
    }
    while(numeric1%numeric2 != 0)
}
module.exports = DisplayOfNumbersInMenu ;