let casa0 = document.querySelectorAll("div");
const player1= "O";
const player2= "X";
let vezJogador = player1;
let fimJogo = false;
let player;

vezAtualiza();

function vezAtualiza(){
    if (fimJogo) {
         return;}
    if (vezJogador == player1) {
        let player = document.querySelector("header div img");
        player.setAttribute("src", "images/x.png");
    }else{
        let player = document.querySelector("header div img");
        player.setAttribute("src", "images/circulo.png");
    }
}

function jogador1(){
    this.classList.add("adX");
}

function jogador2(){
    this.classList.add("adO");
}

casa0[0].onclick= jogador1;
casa0[1].onclick= jogador2;

