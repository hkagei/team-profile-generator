const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, id, email) {
       
}
    getRole() {
        return "Engineer";
    }
}