const Manager = require("../lib/Manager.js");

describe("Manager Test", () => {
  it("Add manager", () => {
    const manager = new Manager("Greag Brown", 123, "gb@mail.com", 111);
    expect(manager.officeNumber).toEqual(expect.any(Number));

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
  });

  it("Get manager name", () => {
    const manager = new Manager("Greag Brown", 123, "gb@mail.com", 111);

    expect(manager.getName()).toEqual(expect.any(String));
  });

  it("Get manager ID", () => {
    const manager = new Manager("Greag Brown", 123, "gb@mail.com", 111);

    expect(manager.getId()).toEqual(expect.any(Number));
  });

  it("Get manager email", () => {
    const manager = new Manager("Greag Brown", 123, "gb@mail.com", 111);

    expect(manager.getEmail()).toEqual(expect.any(String));
  });

  it("Get manager role", () => {
    const manager = new Manager("Greag Brown", 123, "gb@mail.com", 111);

    expect(manager.getRole()).toEqual("Manager");
  });

  it("Get manager office ID", () => {
    const manager = new Manager("Greag Brown", 123, "gb@mail.com", 111);

    expect(manager.getOfficeNumber()).toEqual(111);
  });
});
