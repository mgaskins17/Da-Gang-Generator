const employee = require('../lib/Employee');

describe('Employee', () => {
    describe('constructor', () => {
        it('should create an instance of Employee', () => {
        const test = new employee('Matthew', '123', 'flintstones@bedrock.com');

        expect(test).toEqual({
            name: 'Matthew',
            ID: '123',
            emailadd: 'flintstones@bedrock.com'
        });
        
        })
    })

    describe('Get Information', () => {
        it('Should return the information inputted in the constructor', () => {
             const test = new employee('Matthew', '123', 'flintstones@bedrock.com').getInformation();

             expect(test).toEqual({
                name: 'Matthew',
                ID: '123',
                email: 'flintstones@bedrock.com'
             })
        })
    })
})