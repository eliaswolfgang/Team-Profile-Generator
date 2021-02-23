const Engineer = require('../lib/Engineer.js');
const testEngineer = new Engineer('Steve', 100, 'engineer@example.email', 'testprofile');
describe('Engineer', () => {
    describe('getName', () => {
        it("should return the employee's name", () => {
            expect(testEngineer.name).toEqual('Steve');
        });
    });
    describe('getId', () => {
        it("should return the employee's ID number", () => {
            expect(testEngineer.id).toEqual(100);
        });
    });
    describe('getEmail', () => {
        it("should return the employee's email address", () => {
            expect(testEngineer.email).toEqual('engineer@example.email');
        });
    });
    describe('getGithub', () => {
        it("should return the engineer's GitHub username", () => {
            expect(testEngineer.github).toEqual('testprofile');
        });
    })
    describe('getRole', () => {
        it("should return the employee's current role", () => {
            expect(testEngineer.constructor.name).toEqual('Engineer')
        });
    });
})