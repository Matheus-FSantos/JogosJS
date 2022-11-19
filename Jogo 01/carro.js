let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [45,100,155, 215, 268, 325];
let velocidade = [3, 4, 5, 6, 2.5, 3.5];

function mostraCarro(){
  for(let i = 0; i < imagensCarros.length; i++){
    image(imagensCarros[i], xCarros[i], yCarros[i], 50, 30);  
  }
}

function movimentaCarro(){
  for(let i = 0; i < imagensCarros.length; i++){
    xCarros[i] -= velocidade[i];  
  }
}

function verificaPosicao(){
  for(let i = 0; i < imagensCarros.length; i++){
    if(xCarros[i] < -40){
      xCarros[i] = 600;
    }
  }
}