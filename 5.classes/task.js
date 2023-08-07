class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state *= 1.5;
    }
  
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    }
  
    get state() {
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }
  
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      for (const book of this.books) {
        if (book[type] === value) {
          return book;
        }
      }
      return null;
    }
  
    giveBookByName(bookName) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name === bookName) {
          const book = this.books[i];
          this.books.splice(i, 1);
          return book;
        }
      }
      return null;
    }
  }
  
  class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark >= 2 && mark <= 5) {
        if (!this.marks[subject]) {
          this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
      }
    }
  
    getAverageBySubject(subject) {
      const subjectMarks = this.marks[subject];
      if (!subjectMarks || subjectMarks.length === 0) {
        return 0;
      }
      const sum = subjectMarks.reduce((acc, mark) => acc + mark, 0);
      return sum / subjectMarks.length;
    }
  
    getAverage() {
      const subjects = Object.keys(this.marks);
      if (subjects.length === 0) {
        return 0;
      }
      const totalSum = subjects.reduce((acc, subject) => {
        const subjectAverage = this.getAverageBySubject(subject);
        return acc + subjectAverage;
      }, 0);
      return totalSum / subjects.length;
    }
  }
  
  // Пример использования
  
  const library = new Library("Библиотека имени Ленина");
  
  library.addBook(
   new DetectiveBook(
     "Артур Конан Дойл",
     "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
     2019,
     1008
   )
  );
  library.addBook(
   new FantasticBook(
     "Аркадий и Борис Стругацкие",
     "Пикник на обочине",
     1972,
     168
   )
  );
  library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
  library.addBook(new Magazine("Мурзилка", 1924, 60));
  
  console.log(library.findBookBy("name", "Властелин колец")); // null
  console.log(library.findBookBy("releaseDate", 1924).name); // "Мурзилка"
  
  console.log("Количество книг до выдачи: " + library.books.length); // Количество книг до выдачи: 4
  library.giveBookByName("Машина времени");
  console.log("Количество книг после выдачи: " + library.books.length); // Количество книг после выдачи: 3
  
  const student = new Student("Олег Никифоров");
  student.addMark(5, "химия");
  student.addMark(5, "химия");
  student.addMark(5, "физика");
  student.addMark(4, "физика");
  student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
  
  console.log(`Средний балл по предмету физика: ${student.getAverageBySubject("физика")}`);
  console.log(`Средний балл по предмету биология: ${student.getAverageBySubject("биология")}`);
  console.log(`Средний балл по всем предметам: ${student.getAverage()}`);