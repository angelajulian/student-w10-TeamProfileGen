const Engineer = require("../lib/Engineer.js");

describe("Engineer Test", () => {
  it("Add engineer", () => {
    const engineer = new Engineer(
      "Greag Brown",
      123,
      "gb@mail.com",
      "gbrown",
      "manager"
    );

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.manager).toEqual(expect.any(String));
  });

  it("Get engineer name", () => {
    const engineer = new Engineer("Greag Brown", 123, "gb@mail.com", "gbrown");

    expect(engineer.getName()).toEqual(expect.any(String));
  });

  it("Get engineer ID", () => {
    const engineer = new Engineer("Greag Brown", 123, "gb@mail.com", "gbrown");

    expect(engineer.getId()).toEqual(expect.any(Number));
  });

  it("Get engineer email", () => {
    const engineer = new Engineer("Greag Brown", 123, "gb@mail.com", "gbrown");

    expect(engineer.getEmail()).toEqual(expect.any(String));
  });

  it("Get engineer role", () => {
    const engineer = new Engineer("Greag Brown", 123, "gb@mail.com", "gbrown");

    expect(engineer.getRole()).toEqual("Engineer");
  });

  it("Get engineer github", () => {
    const engineer = new Engineer("Greag Brown", 123, "gb@mail.com", "gbrown");

    expect(engineer.getGithub()).toEqual("gbrown");
  });
});
