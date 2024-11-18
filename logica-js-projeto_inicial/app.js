alert('Bem vindo(a) ao jogo do número secreto!');
let maxNumber = 100;
let secretNumber = Math.floor(Math.random() * maxNumber + 1);
let userNumber;
let attempts = 1;

while (userNumber != secretNumber) {
    userNumber = prompt(`Escolha um número entre 1 e ${maxNumber}`);
    // Verificando se o número escolhido é igual ao número armazenado pela máquina
    if (userNumber == secretNumber) {
        break;
    } else {
        if (userNumber > secretNumber) {
            alert(`O número secreto é menor que: ${userNumber}`);
        } else {
            alert(`O número secreto é maior que: ${userNumber}`);
        }
        attempts++;
    }
}

let quantityAttempts = attempts > 1 ? alert(`Parabens voce acertou o número secreto: ${secretNumber} com ${attempts} tentativas!`) : alert(`Parabens voce acertou o número secreto: ${secretNumber} com ${attempts} tentativa!`);

/*
if ( attempts > 1 ) {
    alert(`Parabens voce acertou o número secreto: ${secretNumber} com ${attempts} tentativas!`);
} else {
    alert(`Parabens voce acertou o número secreto: ${secretNumber} com ${attempts} tentativa!`);
}
    */
