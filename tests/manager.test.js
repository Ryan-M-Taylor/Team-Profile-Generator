const Manager = require('../lib/manager');

describe('Testing Manager Class', () => {
    it ('should be able to create instance', () => {
        //data set up
        const name = 'Ryan';
        const id = 1;
        const email = 'ryan.taylor1@yahoo.com';
        const officeNumber = 1
        //create case
        const manager = new Manager(name, id, email, officeNumber)
        //make assertion
        expect(manager.name).toBe(name)
        expect(manager.id).toBe(id)
        expect(manager.email).toBe(email)
        expect(manager.officeNumber).toBe(officeNumber)
    })
})