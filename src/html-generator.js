const setManager = function (manager) {
  if (manager === "no manager") {
    return `<div class="card employee-card">
        <div class="card-header">
            <h1 class="card-title">No Manager</h1>
        </div>
        <div class="card-body">
        </div>
    </div>`;
  } else {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h1 class="card-title">${manager.getName()}</h1>
        <h2 class="card-title">${manager.getRole()}</h2>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${
              manager.officeNumber
            }</li>
        </ul>
    </div>
</div>
    `;
  }
};

const setEngineer = function (engineer) {
  return `
    <div class="card employee-card">
<div class="card-header">
    <h1 class="card-title">${engineer.getName()}</h1>
    <h2 class="card-title">${engineer.getRole()}</h2>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
    </ul>
</div>
</div>
    `;
};

const setIntern = function (intern) {
  return `
    <div class="card employee-card">
<div class="card-header">
    <h1 class="card-title">${intern.getName()}</h1>
    <h2 class="card-title">${intern.getRole()}</h2>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
</div>
</div>
    `;
};

const createTeamColumn = function (team) {
  return `<div class="container-fluid">
    <div class="row">
        <div class="col jumbotron mb-3 team-heading">
            <h1 class="text-center">Your Team</h1>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="team-area col d-flex justify-content-center">
            ${team}
        </div>
    </div>
</div>`;
};

renderTeam = function (teams) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<title>Work Team</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" href="style.css">
<script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>

            ${teams}

</body>
</html>
`;
};

setTeam = function (team) {
  let pageHTML = [];
  let teamHtml = [];
  console.log("pageHTML is : " + pageHTML + "team HTML is:" + teamHtml);
  console.log(team);
  for (let i = 0; i < team.length; i++) {
    const employee = team[i];
    if (employee.getRole() === "Manager") {
      const man = setManager(employee);
      teamHtml.push(man);
    } else if (employee.getRole() === "Engineer") {
      const engineer = setEngineer(employee);
      teamHtml.push(engineer);
    } else if (employee.getRole() === "Intern") {
      const intern = setIntern(employee);
      teamHtml.push(intern);
    }

    pageHTML.push(teamHtml.join(""));
  }

  return renderTeam(createTeamColumn(pageHTML.join("")));
};

module.exports = setTeam;
