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
}
function displayResult(argPlayerMove, argComputerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);

    if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
    }
    else if ((argPlayerMove == 'kamień' && argComputerMove == 'papier') ||
        (argPlayerMove == 'papier' && argComputerMove == 'nożyce') ||
        (argPlayerMove == 'nożyce' && argComputerMove == 'kamień')) {
        printMessage('Przegrałeś!');
    } else {
        printMessage('Wygrałeś!');
    }
}