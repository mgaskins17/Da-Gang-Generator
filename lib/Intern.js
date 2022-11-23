const Employee = require('./Employee');

class Intern extends Employee {
    // Building a engineer class with a constructor to accept the required inquiries
    constructor(name, ID, email, school) {
      super(name, ID, email)
      this.school = school;
    }

    getSchool() {
      return this.school;
    }
}

module.exports = Intern;