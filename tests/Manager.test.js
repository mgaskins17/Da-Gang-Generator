const manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Manager extending to Employee', () => {
        it('Should give employee information with office number as last item', () => {
            const test = new manager('Matthew', '123', 'mattgaskins77@gmail.com', 'A123');

            expect(test).toEqual({
                name: 'Matthew',
                ID: '123',
                emailadd: 'mattgaskins77@gmail.com',
                offnum: 'A123'
            })
        })
    })

    describe('Get School function', () => {
        const test = new manager('Matthew', '123', 'mattgaskins77@gmail.com', 'A123').getofficeNumber();
        
        expect(test).toEqual('A123');
    })




})