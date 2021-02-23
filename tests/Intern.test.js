const Intern = require('../lib/Intern.js');
const testIntern = new Intern('Steve', 100, 'intern@example.email', 'University of Kansas')
describe('Intern', () => {
    describe('getName', () => {
        it("should return the employee's name", () => {
            expect(testIntern.name).toEqual('Steve');
        });
    });
    describe('getId', () => {
        it("should return the employee's ID number", () => {
            expect(testIntern.id).toEqual(100);
        });
    });
    describe('getEmail', () => {
        it("should return the employee's email address", () => {
            expect(testIntern.email).toEqual('intern@example.email');
        });
    });
    describe('getSchool', () => {
        it("should return the intern's school or university", () => {
            expect(testIntern.school).toEqual('University of Kansas');
        });
    })
    describe('getRole', () => {
        it("should return the employee's current role", () => {
            expect(testIntern.constructor.name).toEqual('Intern')
        });
    });
})