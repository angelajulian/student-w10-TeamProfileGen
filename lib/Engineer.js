const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  setGithub(newGithub) {
    this.github = newGithub;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
