function carregar() {
    var img = window.document.getElementById('foto');     //Primero se debe crear un objeto, este objeto recupera la información del mensaje del hmtl.
    var msg = window.document.getElementById('menssagem');     //Primero se debe crear un objeto, este objeto recupera la información del mensaje del hmtl.
    var data = new Date();
    var hora = data.getHours();
    console.log(img)

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //BoM DIA
        img.src = 'css/images/morning.jpg'

    }
    else if(hora >= 12 && hora < 19){
        //BOA TARDE
        img.src = 'css/images/afternoon.jpg'
    }
    else{
        //BOA NOITE
        img.src = 'css/images/night.jpg'
    }


}