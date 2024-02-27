var fondo = document.querySelector('.container')
var llanta = document.querySelector('.llantauno')
var llantaa = document.querySelector('.llantados')
var luz = document.querySelector('.laluz')
var polvo = document.querySelector('.elpolvo')

fondo.addEventListener('click', fondoAnimado)

function fondoAnimado(){
    fondo.classList.add('fondoAnimado')
    llanta.classList.add('llantaunoAnimada')
    llantaa.classList.add('llantadosAnimada')
    luz.classList.remove('oculto')
    luz.classList.add('luzAnimada')
    polvo.classList.remove('oculto')
    polvo.classList.add('polvoAnimado')
}