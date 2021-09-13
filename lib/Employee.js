class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }

  getId() {
    return this.id;
  }

  setId(newId) {
    this.id = newId;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
