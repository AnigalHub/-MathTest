class TimeСounter { //Класс - Счетчик времени (Таймер)
    constructor(defaultCount) {
        this.count = defaultCount;// цифра от которой начинаем отсчет таймера
        this.currentInterval = null; // номер текущего таймера
    }

    StartTimeСounter() {  //метод запуска счетчика
        if (this.currentInterval == null) {
            this.currentInterval = setInterval(() => {
                if (this.count > 0) {
                    document.getElementById("times").innerHTML = this.count--;
                    if (this.count < 5) {
                        document.getElementById("times").style.color = "red";
                    }
                    if (this.count == 1){
                        document.getElementById('playing_field').style.display = "none";
                    }
                }
            }, 800)
           // console.log('Запущен интервал под номером ' + this.currentInterval);
        }
    }
    StopTimeСounter(){ // метод остановки счетчика
        clearInterval(this.currentInterval); // метод останова счетчика
        this.currentInterval = null; // счетчик становится пустым
        document.getElementById("times").innerHTML = this.count;
        return this.count;
    }
}
module.exports = TimeСounter ;