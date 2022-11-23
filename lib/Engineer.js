const Employee = require('./Employee');

class Engineer extends Employee {
    // Building a engineer class with a constructor to accept the required inquiries
    constructor(name, ID, email, github) {
      super(name, ID, email)
      this.github = github;
    }

    getGithub() {
      return this.github;
    }
}

module.exports = Engineer;