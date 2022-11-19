let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  criaEstrada();
  criaAtor();
  criaCarro();
  imagensCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]; 
  criaSons();
}

function criaEstrada(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
}

function criaAtor(){
  imagemDoAtor = loadImage("imagens/ator-1.png");
}

function criaCarro(){
  imagemCarro1 = loadImage("imagens/carro-1.png");
  
  imagemCarro2 = loadImage("imagens/carro-2.png");
  
  imagemCarro3 = loadImage("imagens/carro-3.png");
}

function criaSons(){
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}