function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
  return this;
};

Student.prototype.addMarks = function (...marksToAdd) {
  if (!this.marks) {
    this.marks = [];
  }

  // Проверяем, не был ли студент исключен
  if (!this.excluded) {
    this.marks.push(...marksToAdd);
  }

  return this;
};

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }

  // Проверяем, не был ли студент исключен
  if (!this.excluded) {
    const sum = this.marks.reduce((total, mark) => total + mark, 0);
    return sum / this.marks.length;
  } else {
    return 0;
  }
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks; // Удаляем свойство this.marks, чтобы его не было в будущем

  this.excluded = reason;
  return this;
};

// Создание студента
let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra").addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry").exclude('плохая учёба');
console.log(student2);