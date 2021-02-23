// Function to help generate HTML
function generateHTML(array) {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <link rel="stylesheet" href="./profiles.css">
        <script src="https://kit.fontawesome.com/43242b94b9.js" crossorigin="anonymous"></script>
        <title>My Team Profile</title>
      </head>
      <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
        <div class="container">
            <div class="row">
                ${generateCards(array)}
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
      </body>
    </html>`
};
function generateCards(array) {
    let textColor;
    let roleSpecial;
    let cards = [];
    for (const employeeObj of array) {
        if (employeeObj.getRole() === 'Manager') {
            textColor = `danger`;
            roleSpecial = `<li class="list-group-item">Office: ${employeeObj.officeNumber}</li>`
        } else if (employeeObj.getRole() === 'Engineer') {
            textColor = `primary`;
            roleSpecial = `<li class="list-group-item">GitHub: <a href="${employeeObj.github}" target="__blank">${employeeObj.github}</a></li>`
        } else if (employeeObj.getRole() === 'Intern') {
            textColor = `success`;
            roleSpecial = `<li class="list-group-item">School: ${employeeObj.school}</li>`
        }
        cards.push(`
        <div class="card border-${textColor} text-${textColor} mb-3" style="max-width: 18rem;">
            <div class="card-header"><i class="far fa-address-book"></i>${employeeObj.getRole()}</div>
                <div class="card-body">
                <h5 class="card-title">${employeeObj.name}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employeeObj.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employeeObj.email}">${employeeObj.email}</a></li>
                    ${roleSpecial}
                </ul> 
                </div>
            </div>`);
    } 
    return cards.join("")
};

module.exports = generateHTML   