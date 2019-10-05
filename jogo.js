var altura = 0;
var largura = 0;

function mostraTamanho(){
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura, largura)
}

mostraTamanho();

function posicaoAleatoria(){
//função para gerar posições aleatorias para o mosquito

    var positionY = Math.floor(Math.random() * altura) - 90; 
    var positionX = Math.floor(Math.random() * largura) - 90;

    if(positionX < 0){
        positionX = 0;
    }else{
        positionX = positionX;
    }


    if(positionY < 0){
        positionY = 0;
    }else{
        positionY = positionY;
    }
    
    
    console.log(positionY, positionX);

   
    //criando elemento img
    
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = 'mosquito';
    mosquito.style.left = positionX + 'px';
    mosquito.style.top = positionY + 'px';
    mosquito.style.position = 'absolute';
    document.body.appendChild(mosquito)    
}

