function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}
function displayResult(argPlayerMove, argComputerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);

    if ((argPlayerMove == 'kamień' && argComputerMove == 'papier') ||
        (argPlayerMove == 'papier' && argComputerMove == 'nożyce') ||
        (argPlayerMove == 'nożyce' && argComputerMove == 'kamień')) {
        printMessage('Przegrałeś!');
    } else if ((argPlayerMove == 'kamień' && argComputerMove == 'nożyce') ||
        (argPlayerMove == 'papier' && argComputerMove == 'kamień') ||
        (argPlayerMove == 'nożyce' && argComputerMove == 'papier')) {
        printMessage('Wygrałeś!');
    } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
    } else {
        printMessage('Nieznany wynik!');
    }
}