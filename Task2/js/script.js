'use strict';

class Human {
  constructor(name, age, sex, height, weight) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.height = height;
    this.weight = weight;
  }

}

class Student  extends Human {
  constructor(name, age, sex, height, weight, placeOfStudy, scholarship) {
    super(name, age, sex, height, weight);
    this.placeOfStudy = placeOfStudy;
    this.scholarship = scholarship;
  }
  watchSeries() {
    alert('I`m preparing to my exams!');
  }
}

class Worker extends Human {
  constructor(name, age, sex, height, weight, placeOfWork, salary) {
    super(name, age, sex, height, weight);
    this.placeOfWork = placeOfWork;
    this.salary = salary;
  }
  work() {
    alert('Working hard');
  }
}


let student = new Student('Alex', 19, 'male', 1.87, 85, 'KPI', 900);
let newStudent = new Student('Anton', 20, 'male', 1.70, 67, 'KNLU', 'none');
let worker = new Worker ('Kate', 22, 'female', 1.68, 57, 'EPAM', '1000$');
let newWorker = new Worker ('Igor', 45, 'male', 1.93, 95, 'school', 5000);


console.log(student);
console.log(worker);
console.log(newStudent);
console.log(newWorker);

// Student.watchSeries();
worker.work();
