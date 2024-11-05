// MAIL
const mails = ["pippo@disney.com", "pluto@disney.com", "paperino@disney.com"];
const userMail = prompt("Inserisci la tua mail!");
let accessGranted = false;

for (let i = 0; i < mails.length; i++) {
    if (userMail === mails[i]) {
        accessGranted = true;
        break;
    }
}

if (accessGranted) {
    console.log("Accesso eseguito! Bentornato!");
} else {
    console.log("Accesso Negato! Controlla se hai scritto la mail correttamente e riprova.");
}