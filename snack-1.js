//1.** Creare un oggetto che descriva uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
//2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.

let alunno = {    
    name: "franco", 
    cognome: "brambilla",
    age: 30       
  };


  for(let chiave in alunno){
    console.log(alunno[chiave])

  }