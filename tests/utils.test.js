const utils = require('../utils/utils');
const expect = require('expect');

describe('Utils', () => {

    describe('Add', () => {
        it('Should add two numbers', () => {
            let res = utils.add(2, 3);
            expect(res).toBe(5).toBeA('number');
        });

        it('Should async add two numbers', (done) => {
            utils.add_async(3, 9, (result) => {
                expect(result).toBe(12).toBeA('number');
                done();
            });

        });
    });

    describe('Square', () => {
        it('Should square a number', () => {
            let res = utils.square(3);
            expect(res).toBe(9).toBeA('number');
        });

        it('Should async square a number', (done) => {
            utils.square_async(3, (result) => {
                expect(result).toBe(9).toBeA('number');
                done();
            });
        });
    });

    describe('Methods', () => {
        it('Should set first_name and last_name', () => {
            let user = {
                age: 21,
                location: 'Vinnytsia'
            };
            let res = utils.set_name(user, 'Serhii Koval');
            expect(res).toInclude({
                first_name: 'Serhii',
                last_name: 'Koval'
            }).toBeAn('object');
        });
    });

});


