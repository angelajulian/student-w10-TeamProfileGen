const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github, manager) {
    super(name, id, email);
    this.github = github;
    this.manager = manager;
  }

  getManager() {
    return this.manager;
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
