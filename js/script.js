const invia=document.getElementById("invia");
const reset=document.getElementById("reset");

// Operazioni da eseguire in seguito al pigiare del tasto invia
invia.addEventListener("click", function(){
    
    // INPUT
    //Prendo dalla pagina i valori inseriti dall'utente
    const distanzaInput = document.getElementById("distanza");
    const distanza = distanzaInput.value;
    const etàInput = document.getElementById("età");
    const età = etàInput.value;
    const nomeInput = document.getElementById("nome");
    const nome = nomeInput.value;

    // Controllo che l'utente non abbia scritto dei dati sbagliati
    if(isNaN(distanza)){
        alert("                                         ERRORE\nHAI INSERITO DELLE LETTERE AL POSTO DEI NUMERI,RICARICA E INSERISCI I DATI CORRETTAMENTE");
    }else if(distanza<=0){
        alert("                                         ERRORE\nHAI INSERITO UNA DISTANZA NON VALIDA O NON ADATTA PER QUESTO VIAGGIO,RICARICA E INSERISCI I DATI CORRETTAMENTE");
    }else if(età==""){
        alert("                                         ERRORE\nNON HAI INSERITO UN'ETÀ,RICARICA E INSERISCI I DATI CORRETTAMENTE");
    }

    //Inizializzo le altre variabili
    const prezzoKm=0.21;
    const scontoMinorenni=0.2;
    const scontoAnziani=0.4;
    let prezzoBiglietto=0;
    let soldiDaScontare=0;

    // LOGICA
    // Calcolo il prezzo pieno in base ai km
    prezzoBiglietto=prezzoKm*distanza;
    // Verifico se l'utente è idoneo ad avere uno sconto e nel caso calcolo quindi l'eventuale sconto
    if(età=="anziano"){
        soldiDaScontare=prezzoBiglietto*scontoAnziani;
        document.getElementById("prezzo-da-scontare").innerHTML=soldiDaScontare.toFixed(2)+" €";
        document.getElementById("sconto-da-applicare").innerHTML="40%";
        document.getElementById("prezzo-non-scontato").innerHTML=prezzoBiglietto.toFixed(2)+" €";
        prezzoBiglietto=prezzoBiglietto-soldiDaScontare;
    }else if(età=="minorenne"){
        soldiDaScontare=prezzoBiglietto*scontoMinorenni;
        document.getElementById("prezzo-da-scontare").innerHTML=soldiDaScontare.toFixed(2)+" €";
        document.getElementById("sconto-da-applicare").innerHTML="20%";
        document.getElementById("prezzo-non-scontato").innerHTML=prezzoBiglietto.toFixed(2)+" €";
        prezzoBiglietto=prezzoBiglietto-soldiDaScontare;
    }else if(età=="maggiorenne"){
        document.getElementById("prezzo-da-scontare").innerHTML="PREZZO PIENO";
        document.getElementById("sconto-da-applicare").innerHTML="BIGLIETTO STANDARD";
        document.getElementById("prezzo-non-scontato").innerHTML=prezzoBiglietto.toFixed(2)+" €";
    }

    //CALCOLO RANDOM
    const numeroCarrozza = Math.floor(Math.random() * 9) + 1;
    const codiceCp = Math.floor(Math.random() * 100000) + 1;
    console.log(numeroCarrozza);

    // OUTPUT
    document.getElementById("nome-output").innerHTML=nome;
    document.getElementById("distanza-output").innerHTML=distanza+" KM";
    document.getElementById("prezzo-finale").innerHTML=prezzoBiglietto.toFixed(2)+" €";
    document.getElementById("numero-carrozza").innerHTML=numeroCarrozza;
    document.getElementById("codice-cp").innerHTML=codiceCp;

    //Ripulisco gli input
    distanzaInput.value="";
    etàInput.value="";
    nomeInput.value="";

})

// Operazioni da eseguire in seguito al pigiare del tasto reset
reset.addEventListener("click", function(){

    //Ripulisco gli output
    document.getElementById("nome-output").innerHTML=" ";
    document.getElementById("distanza-output").innerHTML=" ";
    document.getElementById("prezzo-da-scontare").innerHTML=" ";
    document.getElementById("sconto-da-applicare").innerHTML=" ";
    document.getElementById("prezzo-non-scontato").innerHTML=" ";
    document.getElementById("prezzo-finale").innerHTML=" ";
    document.getElementById("numero-carrozza").innerHTML=" ";
    document.getElementById("codice-cp").innerHTML=" ";
})