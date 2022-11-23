const Employee = require('./Employee');

class Manager extends Employee {
    // Building a manger class with a constructor to accept the required inquiries
    constructor(name, ID, email, offnum) {
        super(name, ID, email);
        this.offnum = offnum;
    }

    getofficeNumber() {
        return this.offnum;
    }
}


module.exports = Manager;