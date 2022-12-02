class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;   
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

console.log(new Employee('Alex', 5, 'email.com').getRole())

module.exports = Employee;