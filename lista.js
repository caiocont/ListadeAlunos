let numeroAlunos = 5;

let listaAlunos = ["marina", "Frederico", "victor", "Ismael", "Pablo", "Erick"]

let contador = 0

while (condition < listaAlunos.length) {

    if (contador == 0) {        
        console.log(contador + ": ZERO " + listaAlunos[contador]);
    } else if (contador % 2 == 1)
        console.log(`${contador}: IMPAR : ${listaAlunos[contador]}`);
    else {
        console.log(`${contador}: PAR ${listaAlunos[contador]}`);
    }

    contador++;
}

 for(let contador = 0; contador < listaAlunos.length; contador++) {    
     console.log (contador)

     if(contador == 0) {
          console.log (contador + ": ZERO");
     } else if (contador % 2 == 1)
     console.log(`${contador}: IMPAR`);
     else{
         console.log (`${contador}: PAR`)
     }

}

