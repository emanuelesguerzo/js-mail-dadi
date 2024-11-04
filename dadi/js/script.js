//DADI
const playerDice = Math.floor(Math.random() * 6) + 1;
const npcDice = Math.floor(Math.random() * 6) + 1;

console.log(`Dado Giocatore: ${playerDice}
Dado Avversario: ${npcDice}`);

if (playerDice > npcDice) {
    console.log("Congratulazioni hai vinto!");
} else if (playerDice === npcDice) {
    console.log("Pareggio! Eri ad un soffio dalla vittoria!");
} else {
    console.log("Sconfitta! Riprova sarai piu' fortunato!");
}