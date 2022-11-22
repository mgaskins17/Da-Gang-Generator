// Making the HTML Page
class generateHTML {
    constructor(manager, engineer, intern) {
        this.manager = manager;
        this.engineer = engineer;
        this.intern = intern;
    }

    publishHTMl() {
        return `<!DOCTYPE html>
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
                <div class="d-flex flex-row justify-content-around">
            
            
                ${this.manager.join(' ')};
            
                
                ${this.engineer.join(' ')};
            
               
                ${this.intern.join(' ')};
            
                </div>
                <!-- Link to jquery to allow for us -->
                <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            </body>
            
            </html>`
    };
};
