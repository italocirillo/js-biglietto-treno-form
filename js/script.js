const invia=document.getElementById("invia");

// Operazioni da eseguire in seguito al pigiare del tasto invia
invia.addEventListener("click", function(){
    //Inizializzo risultato
    const risultato=document.getElementById("risultato");
    
    // INPUT
    //Prendo dalla pagina i valori inseriti dall'utente
    const distanzaInput = document.getElementById("distanza");
    const distanza = distanzaInput.value;

    const etàInput = document.getElementById("età");
    const età = etàInput.value;

    console.log(distanza, età);

    // OUTPUT
    risultato.innerHTML=`Hai scelto di percorrere ${distanza} km,inoltre hai ${età} anni.`

    //Ripulisco gli input
    distanzaInput.value="";
    etàInput.value="";

})