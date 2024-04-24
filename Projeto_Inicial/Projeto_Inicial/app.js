alert('descobra o número secreto!');
let numeroSecreto = parseInt(Math.random() *10 +1);
console.log(numeroSecreto);
let chute = prompt('escolha um número entre 1 e 10');
let tentativas = 1

//enquanto o chute nao for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt('escolha um número entre 1 e 10');
    //se o vhute for igual ao número secreto
    if (chute == numeroSecreto) {
      break;
 } else {
    if (chute > numeroSecreto) {
    alert(`O número secreto é menor que ${chute}`)
 } else {
    alert(`o número secreto é maior que ${chute}`)
 }
  //tentativas = tentaivas + 1
  tentativas++
}

let palavraTentativa = tentativas > 1 ?
'tentativas' : 'tentativas'
alert(`Isso ai voce descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);