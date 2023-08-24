class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    const existingAlarm = this.alarmCollection.find(alarm => alarm.time === time);

    if (existingAlarm) {
      console.warn('Звонок на это же время уже существует. Обновление колбека.');
      existingAlarm.callback = callback; // Обновляем колбек для существующего звонка
    } else {
      this.alarmCollection.push({
        time: time,
        callback: callback,
        canCall: true,
      });
    }
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }

  getCurrentFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  start() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        const currentTime = this.getCurrentFormattedTime();
        this.alarmCollection.forEach(alarm => {
          if (alarm.time === currentTime && alarm.canCall) {
            alarm.canCall = false;
            alarm.callback();
          }
        });
      }, 1000);
    }
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.resetAllCalls();  // Сбрасываем возможность вызова звонков при остановке интервала
    }
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => alarm.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

// Пример использования
const alarmClock = new AlarmClock();

alarmClock.addClock("08:00", () => console.log("Пора вставать!"));
alarmClock.addClock("08:01", () => console.log("Вставай уже!"));

alarmClock.start();
setTimeout(() => {
  alarmClock.stop();
  alarmClock.clearAlarms();
  alarmClock.addClock("08:02", () => console.log("Ты проспал!"));
  alarmClock.start();
}, 60000);
