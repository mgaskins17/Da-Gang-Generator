const intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Intern extending to Employee', () => {
        it('Should give employee information with school as last item', () => {
            const test = new intern('Matthew', '123', 'mattgaskins77@gmail.com', 'University of Houston');

            expect(test).toEqual({
                name: 'Matthew',
                ID: '123',
                emailadd: 'mattgaskins77@gmail.com',
                school: 'University of Houston'
            })
        })
    })

    describe('Get School function', () => {
        const test = new intern('Matthew', '123', 'mattgaskins77@gmail.com', 'University of Houston').getSchool();
        
        expect(test).toEqual('University of Houston');
    })




})
