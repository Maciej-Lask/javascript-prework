let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

//let playerMove = 'nieznany ruch';
let playerMove = getMoveName(playerInput);
//if (playerInput == '1') {
//    playerMove = 'kamień';
//} else if (playerInput == '2') {
//    playerMove = 'papier';
//} else if (playerInput == '3') {
//    playerMove = 'nożyce';
//} else {
//    playerMove = 'nieznany ruch';
//}

printMessage('Twój ruch to: ' + playerMove);

//let computerMove = getMoveName(randomNumber);

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

//let computerMove = 'nieznany ruch';
let computerMove = getMoveName(randomNumber);
//if (randomNumber == 1) {
//    computerMove = 'kamień';
//} else if (randomNumber == 2) {
//    computerMove = 'papier';
//} else {
//    computerMove = 'nożyce';
//}
printMessage('Mój ruch to: ' + computerMove);

if ((playerMove == 'kamień' && computerMove == 'papier') ||
    (playerMove == 'papier' && computerMove == 'nożyce') ||
    (playerMove == 'nożyce' && computerMove == 'kamień')) {
    printMessage('Przegrałeś!');
} else if ((playerMove == 'kamień' && computerMove == 'nożyce') ||
    (playerMove == 'papier' && computerMove == 'kamień') ||
    (playerMove == 'nożyce' && computerMove == 'papier')) {
    printMessage('Wygrałeś!');
} else if (playerMove == computerMove) {
    printMessage('Remis!');
} else {
    printMessage('Nieznany wynik!');
}