'use strict';

class Worker {
    constructor(name,surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate; 
        this.days = days;

    }
    getSalary(){
        return `Зарплата за месяц: ${this.rate* this.days} рублей` ;
    }
}

const firstWoker = new Worker('Zhenia', 'Ivanov',200, 22);
console.log(firstWoker.getSalary());

const secondWoker = new Worker('Vania', 'Petrov',500,20);
console.log(secondWoker.getSalary());