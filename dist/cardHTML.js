// Building the HTML file
class cardHTML {
    constructor(name, role, ID, email, lastitem) {
        this.name = name;
        this.role = role;
        this.ID = ID;
        this.email = email;
        this.lastitem = lastitem;
    }

    ManagerCard() {
        return `
        <div class="col mb-2">
        <div class="card" style="width: 18rem;">
          <div class="card-top bg-danger">
            <h2 class="m-2">${this.name}</h2>
            <h4 class="m-2" >${this.role}</h4>
          </div>
          <div class="card-body bg-secondary">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${this.ID}</li>
              <li class="list-group-item">Email: <a href="${this.email}" class="card-link">${this.email}</a></li>
              <li class="list-group-item">Office Number: ${this.lastitem}</li>
            </ul>
          </div>
        </div>
        </div>\n`
    };
    
    EngineerCard() {
        return `
        <div class="col mb-2">
        <div class="card" style="width: 18rem;">
          <div class="card-top bg-primary">
            <h2 class="m-2">${this.name}</h2>
            <h4 class="m-2" >Engineer</h4>
          </div>
          <div class="card-body bg-secondary">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${this.ID}</li>
              <li class="list-group-item">Email: <a href="${this.email}" class="card-link">${this.email}</a></li>
              <li class="list-group-item">GITHUB: <a href="${this.lastitem}" class="card-link">${this.lastitem}</a></li>
            </ul>
          </div>
        </div>
        </div>\n`
    }
    
    InternCard() {
        return `
        <div class="col mb-2">
        <div class="card" style="width: 18rem;">
          <div class="card-top bg-warning">
            <h2 class="m-2">${this.name}</h2>
            <h4 class="m-2" >Intern</h4>
          </div>
          <div class="card-body bg-secondary">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${this.ID}</li>
              <li class="list-group-item">Email: <a href="${this.email}" class="card-link">${this.email}</a></li>
              <li class="list-group-item">School: ${this.lastitem}</li>
            </ul>
          </div>
        </div>
        </div>\n`
    }


}


module.exports = cardHTML;