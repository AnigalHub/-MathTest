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
                    document.getElementById("timer").innerHTML =  this.count--;
                }
            }, 1000)
           console.log('Запущен интервал под номером ' + this.currentInterval);
        }
    }
    StopTimeСounter(){ // метод остановки счетчика
        clearInterval(this.currentInterval); // метод останова счетчика
        this.currentInterval = null; // счетчик становится пустым
        document.getElementById("timer").innerHTML = this.count;
        if (this.count == -1){
            document.getElementById("timer").innerHTML = 0;
        }
        return this.count;

    }
}
module.exports = TimeСounter ;