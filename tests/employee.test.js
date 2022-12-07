const Employee = require('../lib/employee');

describe('Testing Employee Class', () => {
    it ('should be able to create instance', () => {
        //data set up
        const name = 'Ryan';
        const id = 1;
        const email = 'ryan.taylor1@yahoo.com';
        //create case
        const employee = new Employee(name, id, email)
        //make assertion
        expect(employee.name).toBe(name)
        expect(employee.id).toBe(id)
        expect(employee.email).toBe(email)
    })
})