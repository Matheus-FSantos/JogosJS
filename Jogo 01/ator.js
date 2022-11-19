let xAtor = 100;
let yAtor = 365;
let colisao = false;
let meusPontos = 0;

let comprimentoCarro = 50;
let alturaCarro = 30;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  } else if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  } else if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  } else if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
}

function verificaPosicaoAtor(){
  verificaYAtor();
  verificaXAtor();
}

function verificaColisao(){
  for(let i = 0; i < imagensCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 10);
    
    if(colisao == true){
      somDaColisao.play();
      colidiu();
    }
  }
}

function colidiu(){
  xAtor = 100;
  yAtor = 365;
  if(meusPontos != 0){
     meusPontos -= 1; 
  }
}

function verificaXAtor(){
  if(xAtor < -40){
    xAtor = 500;
  }

  if(xAtor > 502){
    xAtor = -40;
  }
}

function verificaYAtor(){
  if(yAtor < 6){
    xAtor = 100;
    yAtor = 365;
    somDoPonto.play();
    meusPontos += 1;
  }
  
  if(yAtor > 366){
    yAtor = 365;
  }
}

function incluiPontos(){
  textAlign(CENTER);
  fill(color(248,248,255));
  textSize(25);
  text("Pontos: " + meusPontos, width/5, 27);
}