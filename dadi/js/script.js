//DADI
const playerDice = Math.floor(Math.random() * 6) + 1;
const npcDice = Math.floor(Math.random() * 6) + 1;

console.log(`Dado Giocatore: ${playerDice}
Dado Avversario: ${npcDice}`);

let message = "";

if (playerDice > npcDice) {
    message = "Congratulazioni hai vinto!";
} else if (playerDice === npcDice) {
    message = "Pareggio! Eri ad un soffio dalla vittoria!";
} else {
    message = "Sconfitta! Riprova sarai piu' fortunato!";
}