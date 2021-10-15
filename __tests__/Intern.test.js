const Intern = require("../lib/Intern.js");

describe("Intern Test", () => {
  it("Add intern", () => {
    const intern = new Intern(
      "Greag Brown",
      123,
      "gb@mail.com",
      "csu",
      "manager"
    );

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.manager).toEqual(expect.any(String));
  });

  it("Get intern name", () => {
    const intern = new Intern("Greag Brown", 123, "gb@mail.com", "csu");

    expect(intern.getName()).toEqual(expect.any(String));
  });

  it("Get intern ID", () => {
    const intern = new Intern("Greag Brown", 123, "gb@mail.com", "csu");

    expect(intern.getId()).toEqual(expect.any(Number));
  });

  it("Get intern email", () => {
    const intern = new Intern("Greag Brown", 123, "gb@mail.com", "csu");

    expect(intern.getEmail()).toEqual(expect.any(String));
  });

  it("Get intern role", () => {
    const intern = new Intern("Greag Brown", 123, "gb@mail.com", "csu");

    expect(intern.getRole()).toEqual("Intern");
  });

  it("Get intern school", () => {
    const intern = new Intern("Greag Brown", 123, "gb@mail.com", "csu");

    expect(intern.getSchool()).toEqual("csu");
  });
});
