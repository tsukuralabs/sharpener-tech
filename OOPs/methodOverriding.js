class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        console.log(this.name, this.salary);
    }
}

class Manager extends Employee {
    constructor(name, salary, bonus) {
        super(name, salary);
        this.bonus = bonus;
    }
    getDetails() {
        return `${super.getDetails()}, ${this.bonus}`;
    }
}

const standardEmployee = new Employee("Rohit", 50000);
console.log(standardEmployee.getDetails()); 

const teamManager = new Manager("Priya", 90000, 15000);
console.log(teamManager.getDetails());