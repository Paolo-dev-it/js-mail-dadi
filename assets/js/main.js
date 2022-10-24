let eMail = document.getElementById("eMail");


function registerMail(){

    const mail = eMail.value  //Email che inserirà l'utente

    let emailTrue = false;  //Variabile soldatino

    //Array e-mail

    let mailRegistered = ["michele.n@virgilio.it", "paolo.nicoletti99@gmail.com", "carde.elisa@gmail.com"];

    for (i = 0; i < mailRegistered.length; i++ ) { //Ciclo controllo mail

        if ( mail === mailRegistered[i] ){ //Condizione mail all'interno dell'array
            emailTrue = true;
        }  
    }

    if (emailTrue === true) {
        document.getElementById("result").innerHTML = `<p>Welcome</p>`
    }

    else {
        document.getElementById("result").innerHTML = `<p>Sign Up</p>` //Condizione mail non nell'array
    }
}

//Variabili counter

let userWin = 0;
let pcWin = 0 ;

let winUser = document.getElementById("counterUser");
let winPc = document.getElementById("counterPc");

// Funzione sorteggio numeri

function numberRandom(){
    let player =  document.getElementById("resultUtente").innerHTML = Math.round(Math.random() * 6); //Numero random utente
    let computer = document.getElementById("resultPc").innerHTML = Math.round(Math.random() * 6); //Numero random computer

    if (player > computer){ //Condizione utente vincitore
        document.getElementById("risultato").innerHTML = `<p>Ha vinto il giocatore</p>`
        userWin = userWin + 1;
    }

    else if (player < computer) { //Condizione computer vincitore
        document.getElementById("risultato").innerHTML = `<p>Ha vinto il computer</p>`
        pcWin = pcWin + 1

    }

    else { //Condizione pareggio
       document.getElementById("risultato").innerHTML = `<p>PAREGGIO</p>` 
    }

    
    winUser.innerHTML = `Vittorie dell utente:${userWin}`;
    winPc.innerHTML = `Vittorie dell pc:${pcWin}`;
}

