const pikachuList = document.querySelector(".pikachuList")
const pikachu = document.querySelector(".pikachu")
const bulbasaurList = document.querySelector(".bulbasaurList")
const bulbasauro = document.querySelector('.bulbasauro');
const chamanderList = document.querySelector(".chamanderList")
const chamander = document.querySelector(".chamander")
const squirtleList = document.querySelector(".squirtleList")
const squirtle = document.querySelector(".squirtle")
const gengarList = document.querySelector(".gengarList")
const gengar = document.querySelector(".gengar")
const dragoniteList = document.querySelector(".dragoniteList")
const dragonite = document.querySelector(".dragonite")

if(dragoniteList){
    console.log("oioioi")
}


function ativarBulbasaur() {
    bulbasaurList.classList.toggle("ativado");
    bulbasauro.classList.toggle("aberto");
    pikachuList.classList.remove("ativado");
    pikachu.classList.remove("aberto");
    chamanderList.classList.remove("ativado");
    chamander.classList.remove("aberto");
    squirtleList.classList.remove("ativado");
    squirtle.classList.remove("aberto");
    gengarList.classList.remove("ativado");
    gengar.classList.remove("aberto");
    dragoniteList.classList.remove("ativado");
    dragonite.classList.remove("aberto");
}

function ativarPikachu() {
    pikachuList.classList.toggle("ativado");
    pikachu.classList.toggle("aberto");
    bulbasaurList.classList.remove("ativado");
    bulbasauro.classList.remove("aberto");
    chamanderList.classList.remove("ativado");
    chamander.classList.remove("aberto");
    squirtleList.classList.remove("ativado");
    squirtle.classList.remove("aberto");
    gengarList.classList.remove("ativado");
    gengar.classList.remove("aberto");
    dragoniteList.classList.remove("ativado");
    dragonite.classList.remove("aberto");
}

function ativarChamander() {
    chamanderList.classList.toggle("ativado");
    chamander.classList.toggle("aberto");
    pikachuList.classList.remove("ativado");
    pikachu.classList.remove("aberto");
    bulbasaurList.classList.remove("ativado");
    bulbasauro.classList.remove("aberto");
    squirtleList.classList.remove("ativado");
    squirtle.classList.remove("aberto");
    gengarList.classList.remove("ativado");
    gengar.classList.remove("aberto");
    dragoniteList.classList.remove("ativado");
    dragonite.classList.remove("aberto");
}

function ativarSquirtle() {
    squirtleList.classList.toggle("ativado");
    squirtle.classList.toggle("aberto");
    pikachuList.classList.remove("ativado");
    pikachu.classList.remove("aberto");
    bulbasaurList.classList.remove("ativado");
    bulbasauro.classList.remove("aberto");
    chamanderList.classList.remove("ativado");
    chamander.classList.remove("aberto");
    gengarList.classList.remove("ativado");
    gengar.classList.remove("aberto");
    dragoniteList.classList.remove("ativado");
    dragonite.classList.remove("aberto");
}

function ativarGengar() {
    gengarList.classList.toggle("ativado");
    gengar.classList.toggle("aberto");
    pikachuList.classList.remove("ativado");
    pikachu.classList.remove("aberto");
    bulbasaurList.classList.remove("ativado");
    bulbasauro.classList.remove("aberto");
    squirtleList.classList.remove("ativado");
    squirtle.classList.remove("aberto");
    dragoniteList.classList.remove("ativado");
    dragonite.classList.remove("aberto");
}

function ativarDragonite() {
    dragoniteList.classList.toggle("ativado");
    dragonite.classList.toggle("aberto");
    pikachuList.classList.remove("ativado");
    pikachu.classList.remove("aberto");
    bulbasaurList.classList.remove("ativado");
    bulbasauro.classList.remove("aberto");
    chamanderList.classList.remove("ativado");
    chamander.classList.remove("aberto");
    squirtleList.classList.remove("ativado");
    squirtle.classList.remove("aberto");
    gengarList.classList.remove("ativado");
    gengar.classList.remove("aberto");
}
