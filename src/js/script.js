// Limpeza e validação
const email="  Email@sjdds  "
const emailLimpo= email.trim();

console.log(emailLimpo)

if(emailLimpo.includes("@")){
    console.log("Email válido")
}else{
    console.log("Email inválido")
}

// transformação de textos

const tituloArtigo="Como aprender JAVA RAIZ";

const texto1 = tituloArtigo.toLowerCase();
console.log(texto1)
// Tansforma o texto em array
const texto2 =tituloArtigo.split(' ')
console.log(texto2)
// join - junta tudo em uma única str
const texto3 = texto2.join('')
console.log(texto3)
// método toFixed
const precoProduto=199.99
const desconto=0.15
const precoFinal = precoProduto * (1-desconto)
console.log(precoFinal)
// `` template str - concatenação
console.log(`R$ ${precoFinal.toFixed(2)}`)