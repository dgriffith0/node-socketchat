const expect = require('expect')
const {Users} = require('./Users')

describe('Users', () => {

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Alpha'
        },{
            id: '2',
            name: 'Jen',
            room: 'Gamma'
        },{
            id: '3',
            name: 'Julie',
            room: 'Alpha'
        }]
    })

    it('should add new user', () => {
        var user = {
            id: '123',
            name: 'Bob',
            room: 'Dips'
        }
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users[3]).toEqual(user);

    });

    it('should remove a user', () => {
        const removed = users.removeUser('1')
        expect(removed).toBeTruthy();
        expect(users.users.length).toEqual(2);
    });

    it('should not remove user', () => {
        const removed = users.removeUser('9000')
        expect(removed).toBeFalsy();
        expect(users.users.length).toEqual(3);
    });

    it('should find user', () => {
        const user = users.getUser('1');
        expect(user).toBe(users.users[0]);
    });

    it('should not find user', () => {
        const user = users.getUser('666');
        expect(user).toBe(undefined);
    });


    it('should return names in alpha', () => {
        var names = users.getUserList('Alpha');
        expect(names).toEqual(['Mike', 'Julie']);
    });

    it('should return names in Gamma', () => {
        var names = users.getUserList('Gamma');
        expect(names).toEqual(['Jen']);
    });
});