//generates the card for each employee
const generateCard = (employee) => {
    //checks for employee role and returns information specific to that employee role
  function checkRole() {
    if (employee.getRole() === "Manager") {
      return `<li class="list-group-item">Office Number: ${employee.officeNumber}</li>`;
    }
    if (employee.getRole() === "Engineer") {
      return `<li class="list-group-item">GitHub: <a href="https://github.com/${employee.github}">${employee.github}</a></li>`;
    }
    if (employee.getRole() === "Intern") {
      return `<li class="list-group-item">School: ${employee.school}</li>`;
    }
  }
  const employeeInfo = checkRole();

  //adds icon to employee card depending on role
  function getIcon() {
    if (employee.getRole() === "Manager") {
      return `<i class='fas fa-mug-hot'></i>`;
    }
    if (employee.getRole() === "Engineer") {
      return `<i class='fas fa-glasses'></i>`;
    }
    if (employee.getRole() === "Intern") {
      return `<i class='fas fa-user-graduate'></i>`;
    }
  }
  const icon = getIcon();

  var card = `
    <div class = "col-12 col-md-3 mx-1">
    <div class = "card mt-2 shadow">
        <div class = "card-header text-bg-primary">
            <h2 class = "card-title">${employee.name}</h2>
            <h3 class = "card-subtitle">${icon} ${employee.getRole()}</h3>
        </div>
        <div class = "card-body bg-light">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${
                  employee.email
                }">${employee.email}</a></li>
                ${employeeInfo}
            </ul>
        </div>
    </div>
    </div>
    `;
  return card;
};

//generates HTML template to add employee cards to
const generateHtml = (data) => {
  var cardString = "";
  for (let i = 0; i < data.length; i++) {
    cardString += generateCard(data[i]);
  }

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link href="./fontawesome-free-6.2.1-web/css/fontawesome.css" rel="stylesheet">
    <link href="./fontawesome-free-6.2.1-web/css/brands.css" rel="stylesheet">
    <link href="./fontawesome-free-6.2.1-web/css/solid.css" rel="stylesheet">
    <link rel="stylesheet" href="./dist/style.css" />
    <title>Team Manager</title>
</head>
<header class = "text-bg-danger p-3 text-center">
    <h1>My Team<h1>
</header>
<body class = "row">
    <div class = "container mt-5 col-9 d-flex flex-wrap justify-content-center">
    ${cardString}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>
</html>`;
};

module.exports = generateHtml;
