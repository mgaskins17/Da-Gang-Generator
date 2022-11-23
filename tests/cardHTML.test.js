const cardHTML = require('../dist/cardHTML');

describe('cardHTML', () => {
    describe('ManagerCard', () => {
        it('Should rend a card with the input information and manager role', () => {
            const card = new cardHTML('Forrest Gump', 'Manager', '00-Shrimp', `bubbashrimp@hotmail.com`, `A123`).ManagerCard();

            expect(card).toMatch(
                `<div class="col mb-2">
      <div class="card" style="width: 18rem;">
      <div class="card-top bg-danger">
        <h2 class="m-2">Forrest Gump</h2>
        <h4 class="m-2" >Manager</h4>
      </div>
      <div class="card-body bg-secondary">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: 00-Shrimp</li>
        <li class="list-group-item">Email: <a href="mailto:bubbashrimp@hotmail.com" class="card-link">bubbashrimp@hotmail.com</a></li>
        <li class="list-group-item">Office Number: A123</li>
        </ul>
      </div>
      </div>
      </div>\n`)
        })
    })

    describe('Engineer Card', () => {
        it('Should read with the information and Engineer role, this will show the last item is flexible between employees', () => {
            const card = new cardHTML('Harry Potter', 'Engineer', '11', 'hpotter@hogwarts.com', 'hpotter').EngineerCard();

            expect(card).toMatch(
        `<div class="col mb-2">
        <div class="card" style="width: 18rem;">
          <div class="card-top bg-primary">
            <h2 class="m-2">Harry Potter</h2>
            <h4 class="m-2" >Engineer</h4>
          </div>
          <div class="card-body bg-secondary">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: 11</li>
              <li class="list-group-item">Email: <a href="mailto:hpotter@hogwarts.com" class="card-link">hpotter@hogwarts.com</a></li>
              <li class="list-group-item">GITHUB: <a href="https://github.com/hpotter" class="card-link">hpotter</a></li>
            </ul>
          </div>
        </div>
        </div>\n`
            )
        })
    })



})