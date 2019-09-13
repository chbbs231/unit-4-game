const characters=[{
    name:`April`,
    hp: 100},{
    name:`Ron`,
    hp: 100}, {
    name:`Michael`,
    hp: 100},{
    name:`Dwight`,
    hp: 100}]

let fighter = {},
    opponent = {},
    fighterChosen =!1,
    opponentChosen = !1, 
    wins = 0;
    
const attack = () =>{
    let attackButton = document.getElementById('attack-button');
    let gameMessage = document.getElementById('game-message');
   
    let attack = Math.floor(Math.random()*30);
    opponent.hp -= fighter.hp;
    
    gameMessage.innerText = `Opponent has attacked`

    setTimeout
    
}
    

