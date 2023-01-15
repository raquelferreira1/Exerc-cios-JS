// Preciso transferir meu dinheiro
// *Usando operadores lógicos e ternários

const balanço = true
const contaExistente = true
const contaAtiva = true

const tranferência = balanço && contaExistente && contaAtiva? "tranferência aprovada" : "tranferência reprovada"
console.log(tranferência)
