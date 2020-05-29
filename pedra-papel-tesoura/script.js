var placar_jogador = 0
var placar_maquina = 0

var txt_placar_jogador = document.querySelector('td#placarjogador')
var txt_placar_maquina = document.querySelector('td#placarmaquina')
var txt_resultado = document.querySelector('p#resultado')
var img_jogador = document.querySelector('img#imagem-jogador')
var img_oponente = document.querySelector('img#imagem-oponente')

function PlayPedra() {
    var valor_jogador = 1
    img_jogador.setAttribute('src', 'pedra-jogador.png')
    var valor_maquina = Math.floor(Math.random() * 3 + 1)

    if (valor_maquina == 1) {
        img_oponente.setAttribute('src', 'pedra-oponente.png')
        txt_resultado.innerHTML = 'Empate!'
    } else if (valor_maquina == 2) {
        img_oponente.setAttribute('src', 'papel-oponente.png')
        txt_resultado.innerHTML = 'Oponente venceu.'
        placar_maquina++
    } else {
        img_oponente.setAttribute('src', 'tesoura-oponente.png')
        txt_resultado.innerHTML = 'Você venceu!!'
        placar_jogador++
    }
        
    txt_placar_jogador.innerHTML = `${placar_jogador}`
    txt_placar_maquina.innerHTML = `${placar_maquina}`
}

function PlayPapel() {
    var valor_jogador = 2
    img_jogador.setAttribute('src', 'papel-jogador.png')
    var valor_maquina = Math.floor(Math.random() * 3 + 1)

    if (valor_maquina == 1) {
        img_oponente.setAttribute('src', 'pedra-oponente.png')
        txt_resultado.innerHTML = 'Você venceu!!'
        placar_jogador++
    } else if (valor_maquina == 2) {
        img_oponente.setAttribute('src', 'papel-oponente.png')
        txt_resultado.innerHTML = 'Empate!'
    } else {
        img_oponente.setAttribute('src', 'tesoura-oponente.png')
        txt_resultado.innerHTML = 'Oponente venceu.'
        placar_maquina++
    }
        
    txt_placar_jogador.innerHTML = `${placar_jogador}`
    txt_placar_maquina.innerHTML = `${placar_maquina}`
}

function PlayTesoura() {
    var valor_jogador = 3
    img_jogador.setAttribute('src', 'tesoura-jogador.png')
    var valor_maquina = Math.floor(Math.random() * 3 + 1)

    if (valor_maquina == 1) {
        img_oponente.setAttribute('src', 'pedra-oponente.png')
        txt_resultado.innerHTML = 'Oponente venceu.'
        placar_maquina++
    } else if (valor_maquina == 2) {
        img_oponente.setAttribute('src', 'papel-oponente.png')
        txt_resultado.innerHTML = 'Você venceu!!'
        placar_jogador++
    } else {
        img_oponente.setAttribute('src', 'tesoura-oponente.png')
        txt_maquina.innerHTML = 'Oponente escolheu tesoura.'
        txt_resultado.innerHTML = 'Empate!'
    }
        
    txt_placar_jogador.innerHTML = `${placar_jogador}`
    txt_placar_maquina.innerHTML = `${placar_maquina}`
}