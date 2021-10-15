const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school, manager) {
    super(name, id, email);
    this.school = school;
    this.manager = manager;
  }

  getManager() {
    return this.manager;
  }

  getSchool() {
    return this.school;
  }

  setSchool(newSchool) {
    this.school = newSchool;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
