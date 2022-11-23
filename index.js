 const inquirer = require('inquirer');
 const fs = require('fs');
 const needmanager = require('./lib/Manager');
 const needengineer = require('./lib/Engineer');
 const needintern = require('./lib/Intern');
 const cardHTML = require('./dist/cardHTML');

// initializing constants
let manager = [];
let mancard = [];

let engineer = [];  
let engcard = [];     

let intern = [];
let intcard =[];


// Initial Prompt to Start the Program
inquirer.prompt([
    {
        type: 'confirm',
        message: `Would you like to start building your team's roster?`,
        name: 'start'
    }
])
.then((data) =>{
    if (data.start) {
        console.log('this works');
        addManager();
    } else {
        return console.log(`You chose not to build your team's roster.`)
    }
})

// Function for Building the team's roster 
function teamBuilding() {
    inquirer.prompt([
        {
            type: 'list',
            message: `Please choose whether you want to enter a Engineer or Intern to the team's roster:`,
            choices: ['Engineer', 'Intern'],
            name: 'role'
        }
    ])
    .then((data) => {
        switch(data.role) {
            case 'Engineer':
                addEngineer();
                break;

            case 'Intern':
                addIntern();
                break;
        }
    })
}



// Adding manager information function
function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: `What is the team manager name?:`,
            name: 'manname',
        },
        {
            type: 'input',
            message: `What is the team manager ID?:`,
            name: 'manID'
        },
        {
            type: 'input',
            message: `What is the team manager email address?:`,
            name: 'manemail', 
            validate: function(manemail) {
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(manemail);
            }
        },
        {
            type: 'input',
            message: `What is the team manager office number?:`,
            name: 'off'
        }
    ])
        .then((data) => {
            let temporary = new needmanager(data.manname, data.manID, data.manemail, data.off);
            let temp2 = new cardHTML(data.manname, 'Manager', data.manID, data.manemail, data.off).ManagerCard();
            manager.push(temporary);
            mancard.push(temp2);
            teamBuilding();
        })
}


// Adding engineer's information function
function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: `What is the Engineer's name?:`,
            name: 'name',
        },
        {
            type: 'input',
            message: `What is the Engineer's company ID?:`,
            name: 'ID'
        },
        {
            type: 'input',
            message: `What is the Engineer's email address?:`,
            name: 'email',
            validate: function(email) {
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            }
        },
        {
            type: 'input',
            message: `What is the Engineer's Github Username?:`,
            name: 'github'
        }
    ])
        .then((data) => {
            let temporary = new needengineer(data.name, data.ID, data.email, data.github);
            engineer.push(temporary);
            let temp2 = new cardHTML(data.name, 'Engineer', data.ID, data.email, data.github).EngineerCard();
            engcard.push(temp2);
            inquirer.prompt([
                {
                    type: 'confirm',
                    message: `Do you want to add another employee?`,
                    name: 'confirm'
                }
            ])
            .then((data) => {
                if (data.confirm) {
                    teamBuilding();
                } else {
                    return htmlBuild(mancard, engcard, intcard);
                }
            })
        })
}


// Adding intern's information function
function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: `What is the Intern's name?:`,
            name: 'name'
        },
        {
            type: 'input',
            message: `What is the Intern's company ID?:`,
            name: 'ID'
        },
        {
            type: 'input',
            message: `What is the Intern's email address?:`,
            name: 'email',
            validate: function(email) {
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            }
        },
        {
            type: 'input',
            message: `What school does the Intern attend?:`,
            name: 'school'
        }
    ])
        .then((data) => {
            let temporary = new needintern(data.name, data.ID, data.email, data.school);
            intern.push(temporary);
            let temp2 = new cardHTML(data.name, 'Intern', data.ID, data.email, data.school).InternCard();
            intcard.push(temp2);
            inquirer.prompt([
                {
                    type: 'confirm',
                    message: `Do you want to add another employee?`,
                    name: 'confirm'
                }
            ])
            .then((data) => {
                if (data.confirm) {
                    teamBuilding();
                } else {
                    return htmlBuild(mancard, engcard, intcard);
                }
            })
        })
}

function htmlBuild (manager, engineer, intern) {
    console.log('Creating team in HTML now!')
    let temp = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
      <!-- Bootstrap link to allow for us -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
      <!-- CSS stylesheet link -->
      <link rel="stylesheet" href="./Assets/style.css" />
      <title></title>
    </head>
    <body>
        <div class="jumbotron bg-info text-center">
          <h1 class="display-4">Team Roster</h1>
        </div>
        
        
        <!-- Card's Container -->
        <div class="w-75 mx-auto row row-cols-3">
    
        <!-- Manager Card Built -->
        ${manager.join(' ')}
    
        <!-- Engineer Card Built -->
        ${engineer.join(' ')}
    
        <!-- Intern Card Built -->
        ${intern.join(' ')}
    
        </div>
        <!-- Link to jquery to allow for us -->
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    </body>
    
    </html>`
    fs.writeFile('index.html', temp, (err) =>
    err? console.error(err) : console.log('Commit logged!')
    );
}


