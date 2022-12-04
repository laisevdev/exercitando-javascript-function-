function carregar() {
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var data = new Date ()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundos = data.getMilliseconds ()
    if (hora > 5 && hora < 12) {
        msg.innerHTML = `Bom dia! Agora são ${hora}:${minuto} min e ${segundos} segundos.`
        foto.src = 'manhã.jpg'
        document.body.style.background= '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `<b>Boa Tarde!</b> Agora são ${hora}:${minuto} min e ${segundos} segundos.`
        foto.src = 'tarde.jpg'
        document.body.style.background = '#e2cdf9'
    } else {
        msg.innerHTML = `Boa Noite! Agora são ${hora}:${minuto} min e ${segundos} segundos.`
        foto.src = 'noite.jpg'
        document.body.style.background = '#515155'
    }
}



