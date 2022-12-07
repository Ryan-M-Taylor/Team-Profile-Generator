const Intern = require('../lib/intern');

describe('Testing Intern Class', () => {
    it ('should be able to create instance', () => {
        //data set up
        const name = 'Ryan';
        const id = 1;
        const email = 'ryan.taylor1@yahoo.com';
        const school = 'UCSD'
        //create case
        const intern = new Intern(name, id, email, school)
        //make assertion
        expect(intern.name).toBe(name)
        expect(intern.id).toBe(id)
        expect(intern.email).toBe(email)
        expect(intern.school).toBe(school)
    })
})