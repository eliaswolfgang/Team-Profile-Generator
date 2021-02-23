const Manager = require('../lib/Manager.js');
const testManager = new Manager('Steve', 100, 'manager@example.email', 401);
describe('Manager', () => {
    describe('getName', () => {
        it("should return the employee's name", () => {
            expect(testManager.name).toEqual('Steve');
        });
    });
    describe('getId', () => {
        it("should return the employee's ID number", () => {
            expect(testManager.id).toEqual(100);
        });
    });
    describe('getEmail', () => {
        it("should return the employee's email address", () => {
            expect(testManager.email).toEqual('manager@example.email');
        });
    });
    describe('getOffice', () => {
        it("should return the manager's office number", () => {
            expect(testManager.officeNumber).toEqual(401);
        });
    })
    describe('getRole', () => {
        it("should return the employee's current role", () => {
            expect(testManager.constructor.name).toEqual('Manager')
        });
    });
})