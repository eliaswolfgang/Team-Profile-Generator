const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return this.constructor.name;
    }
}

module.exports = Engineer