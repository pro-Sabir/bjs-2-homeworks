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
		existingAlarm.callback = callback; // Обновляем колбек
	  } else {
		this.alarmCollection.push({
		  time: time,
		  callback: callback,
		  canCall: true,
		});
		 clearAlarms() {
	  this.stop();
	  this.alarmCollection = [];
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
	  }
	}
  
	resetAllCalls() {
	  this.alarmCollection.forEach(alarm => alarm.canCall = true);
	}
  
	clearAlarms() {
	  this.stop();
	  clearInterval(this.intervalId); // Очищаем интервал, если он активен
	  this.intervalId = null;
	  this.alarmCollection = [];
	}
  }
  
  // Пример использования
  const alarmClock = new AlarmClock();
  
  alarmClock.addClock("08:00", () => console.log("Пора вставать!"));
  alarmClock.addClock("08:01", () => console.log("Вставай уже!"));
  
  // Сначала добавляем звонки, затем запускаем будильник
  alarmClock.start();
  
  setTimeout(() => {
	// Останавливаем будильник и очищаем звонки
	alarmClock.stop();
	alarmClock.clearAlarms();
	
	// Добавляем новый звонок
	alarmClock.addClock("08:02", () => console.log("Ты проспал!"));
	
	// Снова запускаем будильник
	alarmClock.start();
  }, 60000);