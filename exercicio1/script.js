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