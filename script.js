var tentativas = 4;
var acertou = false;

function chutar() {
    var chute = document.getElementById('chute').value;
    document.getElementById('resultado').style.display = "block";

    if (tentativas > 0) {
        if (chute == numeroAleatorio) {
            document.getElementById('resultado').innerHTML = `Parabéns, você acertou! O número aleatório era ${numeroAleatorio}!`
            acertou = true;
            tentativas = 0;
            document.getElementById('chute').readOnly = true;
        } else if (chute < numeroAleatorio && acertou == false) {
            document.getElementById('resultado').innerHTML = `Você errou! O número sorteado é maior que ${chute}.`
        } else if (chute > numeroAleatorio && acertou == false) {
            document.getElementById('resultado').innerHTML = `Você errou! O número sorteado é menor que ${chute}.`
        }

        if (!acertou) {
        tentativas--;
        document.getElementById('tentativas').innerHTML = `Tentativas restantes: ${tentativas}` 
        }
    }

    if (tentativas <= 0 && acertou == false) {
        document.getElementById('tentativas').innerHTML = "Você não tem nenhuma tentativa restante."
        document.getElementById('chute').readOnly = true;
        document.getElementById('resposta').style.display = "block";
        document.getElementById('resposta').innerHTML = `A resposta era ${numeroAleatorio}.`
    } else if (tentativas <= 0 && acertou) {
        document.getElementById('tentativas').innerHTML = "Você já acertou. Não há mais tentativas!"
    }
}

var numeroAleatorio = Math.floor((Math.random() * 101));