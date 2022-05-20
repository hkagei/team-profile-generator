const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email) {
       
    }
    getRole() {
        return "Engineer";
    }

}

module.exports = Engineer