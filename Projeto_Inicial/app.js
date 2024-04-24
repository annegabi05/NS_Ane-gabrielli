alert('descubra o número secreto!');
let numeroSecreto = parseInt(Math.random () *10 +1);
console.log(numeroSecreto);
let chute = prompt('escolha um número entre 1 e 10');
let tentativas = 1;

//enquanto o chute não for igual ao número secreto
while ( chute!= numeroSecreto) {
    chute = prompt('escolha um número entre 1 e 10');
    // se o chute for igual ao numero secreto.
  if (chute == numeroSecreto) {
    break;
  } else {
    alert(`Isso ai! Voce descobriu o numero secreto ${numeroSecreto}`)
    if (chute > numeroSecreto) {
    alert(`O número secreto é maior que ${chute}`);
} else {
    alert(`O número secreto é maior que ${chute}`)

}
// tentativas = tentativas + 1
tentativas++
       }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

