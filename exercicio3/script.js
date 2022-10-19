//Crie um array com 5 strings.
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]

//Faça um programa que percorra este array e imprima as strings em formato de ranking
for (let i=0; i<maioresPaises.length; i++){
    const paises = maioresPaises [i]
    console.log(`${i+1} - ${paises} `)
}

// //entrada
// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

// //saída
// "1 - Rússia"
// "2 - Canadá"
// "3 - China"
// "4 - EUA"
// "5 - Brasil"
