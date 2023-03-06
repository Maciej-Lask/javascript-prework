let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
} else {
    playerMove = 'nieznany ruch';
}

printMessage('Twój ruch to: ' + playerMove);

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
    computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else {
    computerMove = 'nożyce';
}
printMessage('Mój ruch to: ' + computerMove);

if (playerMove == 'kamień' && computerMove == 'papier') {
    printMessage('Przegrałeś!');
} else if (playerMove == 'papier' && computerMove == 'nożyce') {
    printMessage('Przegrałeś!');
} else if (playerMove == 'nożyce' && computerMove == 'kamień') {
    printMessage('Przegrałeś!');
} else if (playerMove == 'kamień' && computerMove == 'nożyce') {
    printMessage('Wygrałeś!');
} else if (playerMove == 'papier' && computerMove == 'kamień') {
    printMessage('Wygrałeś!');
} else if (playerMove == 'nożyce' && computerMove == 'papier') {
    printMessage('Wygrałeś!');
} else if (playerMove == computerMove) {
    printMessage('Remis!');
} else {
    printMessage('Nieznany wynik!');
}

let computerMove = `kamień`;
let playerMove = 'papier';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
printMessage('Zagrałem ' + playerMove + '! Wygrywam!');