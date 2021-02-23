const Employee = require('../lib/Employee.js');
const testEmployee = new Employee('Steve', 100, 'example@example.email');
describe('Employee', () => {
    describe('getName', () => {
        it("should return the employee's name", () => {
            expect(testEmployee.name).toEqual('Steve');
        });
    });
    describe('getId', () => {
        it("should return the employee's ID number", () => {
            expect(testEmployee.id).toEqual(100);
        });
    });
    describe('getEmail', () => {
        it("should return the employee's email address", () => {
            expect(testEmployee.email).toEqual('example@example.email');
        });
    });
    describe('getRole', () => {
        it("should return the employee's current role", () => {
            expect(testEmployee.constructor.name).toEqual('Employee')
        });
    });
})