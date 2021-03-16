let timer = document.getElementById("timer");
let modal_window = document.getElementById("myModal2"); // Модальное окно "Игра приостановлена"

class TimeСounter { //Класс - Счетчик времени (Таймер)
    constructor(defaultCount) {
       // цифра от которой начинаем отсчет таймера
        this.currentInterval = null; // номер текущего таймера
    }

    StartTimeСounter(defaultCount) {  //метод запуска счетчика
        this.count = defaultCount;

        if (this.currentInterval == null) {
            this.currentInterval = setInterval(() => {
                if (this.count >= 0) {
                    timer.innerHTML =  this.count--;
                    if(this.count == -1){
                        modal_window.style.display = "block"; // выводим сообщение
                    }
                }
            }, 1000)
           //console.log('Запущен интервал под номером ' + this.currentInterval);
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