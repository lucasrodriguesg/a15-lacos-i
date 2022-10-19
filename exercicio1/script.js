//Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.
let coxinhas
let conta = 0
const preco = 2.50

while (coxinhas !== "N") { 
    coxinhas=prompt("Deseja mais coxinha? Sim (S) e Não (N)").toUpperCase()
    if (coxinhas !== "N"){
    conta+=preco
    }
}
console.log("Sua conta fechou em:", conta)