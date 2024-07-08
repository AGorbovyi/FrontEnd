// sort players by number of goals

const footballPlayers = [
    { id: 1, name: "Player 1", position: "Goalkeeper", goals: 0 },
    { id: 2, name: "Player 2", position: "Defender", goals: 3 },
    { id: 3, name: "Player 3", position: "Defender", goals: 2 },
    { id: 4, name: "Player 4", position: "Defender", goals: 1 },
    { id: 5, name: "Player 5", position: "Midfielder", goals: 5 },
    { id: 6, name: "Player 6", position: "Midfielder", goals: 6 },
    { id: 7, name: "Player 7", position: "Midfielder", goals: 4 },
    { id: 8, name: "Player 8", position: "Forward", goals: 10 },
    { id: 9, name: "Player 9", position: "Forward", goals: 8 },
    { id: 10, name: "Player 10", position: "Forward", goals: 7 }
];

// console.log(footballPlayers.goals.sort((a, b) => a - b)); // не работает!!!


console.log(footballPlayers.sort((a, b) => {
    return a.goals - b.goals;
}));