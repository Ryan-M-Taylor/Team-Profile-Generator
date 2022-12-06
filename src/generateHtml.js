const generateCard= (employee) => {
    var card = `
    <div>
        <h1>${employee.getRole()}</h1>
        <h1>${employee.name}</h1>
        <h2>${employee.id}</h2>
        <h2>${employee.email}</h2>
        ${()=> {
            if(employee.getRole() === "Manager"){
                return `<p>${employee.officeNumber}</p>`
            }
            if(employee.getRole() === "Engineer"){
                return `<p>${employee.github}</p>`
            }
            if(employee.getRole() === "Intern"){
                return `<p>${employee.school}</p>`
            }
        }}
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
        <title>Team Manager</title>
    </head>
    <body>
        ${cardString}
    </body>
    </html>
    `
}

module.exports = generateHtml