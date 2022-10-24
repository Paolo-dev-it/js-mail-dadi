let eMail = document.getElementById("eMail");



function registerMail(){

    const mail = eMail.value  //Email che inserirà l'utente
    
    let emailTrue = false;


    let mailRegistered = ["michele.n@virgilio.it", "paolo.nicoletti99@gmail.com", "carde.elisa@gmail.com"];

    for (i = 0; i < mailRegistered.length; i++ ) {

        if ( mail === mailRegistered[i] ){
            console.log("benvenuto");
            emailTrue = true;
        }  
    }

    if (emailTrue === true) {
        document.getElementById("result").innerHTML = `<p>Welcome</p>`
    }

    else {
        document.getElementById("result").innerHTML = `<p>Sign Up</p>`
    }
}