alert("Olá mundanos, sejam bem vindos ao jogo do número secreto");
numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); 
console.log (numeroSecreto);
let chute ;
let tentativas = 1;

//enquanto chute estiver errado ao numero secreto
while (chute != numeroSecreto){
    chute = prompt(`Qual o número você acha que é o secreto? Entre 1 e ${numeroMaximo}`);
    // se chute for = ao número secreto 
    if (chute == numeroSecreto) {
        break;
    } else {
    if (chute > numeroSecreto){
        alert (`O número secreto é menor que ${chute}`);
    }else {
        alert (`O número secreto é maior que ${chute}`);
    }
    //tentativas = tentativas + 1;
    tentativas ++;
    }
}

    let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
    alert (`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);


//if (tentativas > 1 ) {
//  alert (`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
//  alert (`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }
