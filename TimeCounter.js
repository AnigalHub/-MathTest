let timer = document.getElementById("timer");
let modal_window_end = document.getElementById("ModalWindowEnd"); // Модальное окно "Игра завершена"

class TimeСounter { //Класс - Счетчик времени (Таймер)
    constructor(defaultCount) {
        this.currentInterval = null; // номер текущего таймера
    }
    StartTimeСounter(defaultCount) {  //метод запуска счетчика
        this.count = defaultCount;  // цифра от которой начинаем отсчет таймера

        if (this.currentInterval == null) {
            this.currentInterval = setInterval(() => {
                if (this.count >= 0) {
                    timer.innerHTML =  this.count--;
                    if(this.count == -1){
                        modal_window_end.style.display = "block"; // выводим сообщение
                    }
                }
            }, 1000)
        }
    }
    StopTimeСounter(){ // метод остановки счетчика
        clearInterval(this.currentInterval); // остановка счетчика
        this.currentInterval = null; // счетчик становится пустым
        timer.innerHTML = this.count;
        if (this.count == -1){
            timer.innerHTML = 0;
        }
        return this.count;
    }
}
module.exports = TimeСounter ;