// # EXERCÍCIO 1
// A)
const numero = prompt("Digite um número:")
if (numero % 2 === 0){ console.log("O número é divisivel por 2")} 
else if (numero % 3 === 0){ console.log("o número é divisivel por 3")}
console.log(numero)
//B)
const numero2 = prompt ("digite um número:")
if (numero2 % 2 === 0 || numero2 % 3 === 0)
{console.log("o número é divisível por 2 ou por 3")}
else {console.log("o número não é divisivel por 2 nem por 3")}
console.log(numero2)

//#EXERCÍCIO 2
function verificarNacionalidade() {
    const nacionalidade = prompt("Escreva aqui sua nascionalidade:");
    switch(nacionalidade){
    case "brasileira":
    Nacionalidade = "brasileira"
    break
   case  "Argentina":
    Nacionalidade = "argentina"
   break
        case "uruguaia":
        Nacionalidade = "uruguaia"
        break
        case"chilena":
        Nacionalidade = "chilena"
        break
 case "Colombiana":
    Nacionalidade = "colombiana"
break
defalt:
console.log("nacionalidade não encontrada")
    }
}
verificarNacionalidade("Brasileira")