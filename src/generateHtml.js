const generateCard= (employee) => {
    function checkRole (){
        if(employee.getRole() === "Manager"){
            return `<h4 class = "card-text">${employee.officeNumber}</h4>`
        }
        if(employee.getRole() === "Engineer"){
            return `<h4 class = "card-text"><a href="https://github.com/${employee.github}">${employee.github}</a></h4>`
        }
        if(employee.getRole() === "Intern"){
            return `<h4 class = "card-text">${employee.school}</h4>`
        }
    }
    const employeeInfo = checkRole()

    var card = `
    <div class = "card">
        <div class = "card-body">
        <h2 class = "card-title">${employee.name}</h2>
        <h3 class = "card-subtitle">${employee.getRole()}</h3>
        <h4 class = "card-text">${employee.id}</h4>
        <h4 class = "card-text"><a href="mailto:${employee.email}">${employee.email}</a></h4>
        ${employeeInfo}
        </div>
    </div>
    `
    return card
}


const generateHtml = (data)=> {
//somehow format that data to put it in the body as multiple cards
//remember that data is an array
//i should iterate through my array of data
// create cards for each member of the array
var cardString = ""
for(let i = 0; i < data.length; i++){
    cardString += generateCard(data[i])
}

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <link rel="stylesheet" href="./dist/style.css" />
        <title>Team Manager</title>
    </head>
    <header>
        <h1>My Team<h1>
    </header>
    <body>
        ${cardString}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}

module.exports = generateHtml