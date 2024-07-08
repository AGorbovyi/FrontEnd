// Написать функцию, которая принимает массив обьектов, и имя свойства.
// И она вернет нам массив значений по этому свойству



const footballPlayers = [
    { name: "Player 1", position: "Forward", team: "Team A" },
    { nameX: "Player 2", position: "Midfielder", team: "Team B" },
    { name: "Player 3", position: "Defender", team: "Team C" },
    { name: "Player 4", position: "Goalkeeper", team: "Team D" },
    { name: "Player 5", position: "Forward", team: "Team E" },
    { name: "Player 6", position: "Midfielder", team: "Team F" },
    { name: "Player 7", position: "Defender", team: "Team G" },
    { name: "Player 8", position: "Goalkeeper", team: "Team H" },
    { name: "Player 9", position: "Forward", team: "Team I" },
    { name: "Player 10", position: "Midfielder", team: "Team J" }
];

console.log("Первый элемент " + footballPlayers[0]['name']);


function footballPlayer(footballPlayers, name) {
    const arrName = [];
    for (let i = 0; i < footballPlayers.length; i++) {

        
        if ('name' in footballPlayers[i]) {
            arrName.push(footballPlayers[i][name]);
        }
    }
    return arrName;
}

const newName = 'name'
console.log(footballPlayer(footballPlayers, newName));


// подсчитать количество Forward
function forwardsQ(footballPlayers) {
    let q = 0;
    for (let i = 0; i < footballPlayers.length; i++) {

        if (footballPlayers[i]['position'] === 'Forward') {
            q++;
        }
    }
    return q;
}

console.log(forwardsQ(footballPlayers));
