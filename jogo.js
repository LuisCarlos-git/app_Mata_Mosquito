var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;

function mostraTamanho(){
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura, largura)
}

var cronometro = setInterval(function(){
    tempo -= 1;

    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(fimMosquito);
        window.location.href = "vitoria.html";
    }else{

        document.getElementById('cronometro').innerHTML = tempo;
    }
 }, 1000)
    

 


mostraTamanho();

function posicaoAleatoria(){
//função para gerar posições aleatorias para o mosquito

//verifica se tem outro mosquito
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();

        if(vidas > 3){
            window.location.href = "fimDoJogo.html"
        }else{
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";

            vidas++
        }

    }

    var positionY = Math.floor(Math.random() * altura) - 90; 
    var positionX = Math.floor(Math.random() * largura) - 90;

    if(positionX < 0){
        positionX = 0;
    }


    if(positionY < 0){
        positionY = 0;
    }
    
    
    console.log(positionY, positionX);

   
    //criando elemento img
    
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = mudaTamanho() + ' ' +  mudaLado();
    mosquito.style.left = positionX + 'px';
    mosquito.style.top = positionY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function(){
        this.remove();
    }
    document.body.appendChild(mosquito)    
}

function mudaTamanho(){
    var classe = Math.floor(Math.random() * 3);

    switch(classe){
        case 0:
            return 'mosquito';
        
        case 1:
            return 'mosquito1';

        case 2:
            return 'mosquito2';
    }
}
function mudaLado(){
    var classe = Math.floor(Math.random() * 2);
    
    switch(classe){
        case 0:
            return 'ladoA';
        
        case 1:
            return 'ladoB';
    }
}
