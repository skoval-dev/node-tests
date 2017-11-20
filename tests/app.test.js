const expect = require('expect');
const rewire = require('rewire');

let app = rewire('../spies/app');

describe('App', () => {
    let db = {
        save_user: expect.createSpy()
    };
    app.__set__('db', db);

    it('Should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy('Serhii', 20);
        expect(spy).toHaveBeenCalledWith('Serhii', 20);
    });

    it('Should call save_user with user object', () => {
        let email = 'test@mail.com';
        let password = 'qweerty';

        app.handle_sign_up(email, password);
        expect(db.save_user).toHaveBeenCalledWith({email, password});
    });

});