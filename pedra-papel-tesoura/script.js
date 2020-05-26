var placar_jogador = 0
var placar_maquina = 0
var txt_placar_jogador = document.querySelector('td#placarjogador')
var txt_placar_maquina = document.querySelector('td#placarmaquina')

var txt_jogador = document.querySelector('p#usuario')
var txt_maquina = document.querySelector('p#maquina')
var txt_resultado = document.querySelector('p#resultado')

function PlayPedra() {
    var valor_jogador = 1
    txt_jogador.innerHTML = 'voce escolheu pedra'
    var valor_maquina = Math.floor(Math.random() * 3 + 1)

    if (valor_maquina == 1) {
        txt_resultado.innerHTML = 'Empate'
        txt_maquina.innerHTML = 'oponente escolheu pedra'
    } else if (valor_maquina == 2) {
        placar_maquina++
        txt_maquina.innerHTML = 'oponente escolheu papel'
        txt_resultado.innerHTML = 'oponente venceu'
    } else {
        placar_jogador++
        txt_maquina.innerHTML = 'oponente escolheu tesoura'
        txt_resultado.innerHTML = 'você venceu'
    }
        
    txt_placar_jogador.innerHTML = `${placar_jogador}`
    txt_placar_maquina.innerHTML = `${placar_maquina}`
}

function PlayPapel() {
    var valor_jogador = 2
    txt_jogador.innerHTML = 'você escolheu papel'
    var valor_maquina = Math.floor(Math.random() * 3 + 1)

    if (valor_maquina == 1) {
        txt_resultado.innerHTML = 'voce venceu'
        txt_maquina.innerHTML = 'oponente escolheu pedra'
        placar_jogador++
    } else if (valor_maquina == 2) {
        txt_maquina.innerHTML = 'oponente escolheu papel'
        txt_resultado.innerHTML = 'empate'
    } else {
        txt_maquina.innerHTML = 'oponente escolheu tesoura'
        txt_resultado.innerHTML = 'oponente venceu'
        placar_maquina++
    }
        
    txt_placar_jogador.innerHTML = `${placar_jogador}`
    txt_placar_maquina.innerHTML = `${placar_maquina}`
}

function PlayTesoura() {
    var valor_jogador = 3
    txt_jogador.innerHTML = 'voce escolheu tesoura'
    var valor_maquina = Math.floor(Math.random() * 3 + 1)

    if (valor_maquina == 1) {
        txt_resultado.innerHTML = 'oponente venceu'
        txt_maquina.innerHTML = 'oponente escolheu pedra'
        placar_maquina++
    } else if (valor_maquina == 2) {
        txt_maquina.innerHTML = 'oponente escolheu papel'
        txt_resultado.innerHTML = 'você venceu'
        placar_jogador++
    } else {
        txt_maquina.innerHTML = 'oponente escolheu tesoura'
        txt_resultado.innerHTML = 'empate'
    }
        
    txt_placar_jogador.innerHTML = `${placar_jogador}`
    txt_placar_maquina.innerHTML = `${placar_maquina}`
}