class Employee {
    // Building a manger class with a constructor to accept the required inquiries
    constructor(name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.emailadd = email;
    }

    getInformation() {
        return {
            name: this.name,
            ID: this.ID,
            email: this.emailadd
        }
    }
}


module.exports = Employee;