const Engineer = require('../lib/engineer');

describe('Testing Engineer Class', () => {
    it ('should be able to create instance', () => {
        //data set up
        const name = 'Ryan';
        const id = 1;
        const email = 'ryan.taylor1@yahoo.com';
        const github = 'Ryan-M-Taylor'
        //create case
        const engineer = new Engineer(name, id, email, github)
        //make assertion
        expect(engineer.name).toBe(name)
        expect(engineer.id).toBe(id)
        expect(engineer.email).toBe(email)
        expect(engineer.github).toBe(github)
    })
})