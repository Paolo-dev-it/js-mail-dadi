let eMail = document.getElementById("eMail");


let emailTrue = true;


function registerMail(){
    const mail = eMail.value   //Email che inserirà l'utente

    let mailRegistered = ["michele.n@virgilio.it", "paolo.nicoletti99@gmail.com", "carde.elisa@gmail.com"];

    for (i = 0; i < mailRegistered.length; i++ ) {

        if ( mail === mailRegistered[i] ){
            console.log("benvenuto");
            emailTrue = false;
        }
         if ( mail != mailRegistered[i] ){
            console.log("registrati");
            emailTrue = true;
        }
            
        
    }
}