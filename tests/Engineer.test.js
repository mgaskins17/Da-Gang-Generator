const engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Engineer extending to Employee', () => {
        it('Should give employee information with github as last item', () => {
            const test = new engineer('Matthew', '123', 'mattgaskins77@gmail.com', 'mgaskins17@github.com');

            expect(test).toEqual({
                name: 'Matthew',
                ID: '123',
                emailadd: 'mattgaskins77@gmail.com',
                github: 'mgaskins17@github.com'
            })
        })
    })

    describe('Get Github function', () => {
        const test = new engineer('Matthew', '123', 'mattgaskins77@gmail.com', 'mgaskins17@github.com').getGithub();
        
        expect(test).toEqual('mgaskins17@github.com');
    })




})