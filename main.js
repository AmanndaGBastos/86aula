canvas= new fabric.Canvas("myCanvas")
//Posição x e y do jogador:
playerX = 10;
playerY = 10;

//Altura e largura da img do bloco:
blockImageWidth=30;
blockImageHeight=30;



//Variáveis de objeto e bloco:
var playerObject="";
var blockImageObject="";


function playerUpdate(){
  fabric.Image.fromURL("player.png",function(Img){
  playerObject= Img;
  playerObject.scaleToWidth(150);
   playerObject.scaleToHeight(140); 
   playerObject.set({ top:playerY, left:playerX });

    canvas.add(playerObject);
 
  })
}
    
function newImage(getImage){
  fabric.Image.fromUrl(getImage,function(Img){ 
   blockImageObject= Img;
   blockImageObject.scaleToWidth(150);
   blockImageObject.scaleToHeight(140); 
   blockImageObject.set({ top:playerY, left:playerX });

      canvas.add( blockImageObject);
   
    })
}

//Escutador de eventos:
window.addEventListener("keydown",myKeyDown)

//Funções de movimento:
function myKeyDown(e){
keyPressed=e.keyCode;
console.log(keyPressed)
if(e.shiftKey == true && keyPressed == '80')
{
 console.log("p e shift pressionados juntos")
blockImageHeight=blockImageHeight+10
blockImageWidth=blockImageWidth+10
document.getElementById("currentWidth").innerHTML=blockImageWidth
document.getElementById("currentHeight").innerHTML=blockImageHeigh

}
if(e.shiftKey == true && keyPressed == '77'){
  
  console.log("m e shift pressionados juntos")
  blockImageHeight=blockImageHeight-10
  blockImageWidth=blockImageWidth-10
  document.getElementById("currentWidth").innerHTML=blockImageWidth
  document.getElementById("currentHeight").innerHTML=blockImageHeigh
  
}
if(keyPressed=="38"){
  up();
  console.log("cima")
}
e.shiftKey == true && keyPressed == '80'
if(keyPressed == '40')
 { down(); console.log("baixo"); }
  if(keyPressed == '37')
   { left(); console.log("esquerda");
   } if(keyPressed == '39')
    { right(); console.log("direita");
   } if(keyPressed == '87')
    { newImage('wall.jpg');
     console.log("w"); 
    } if(keyPressed == '71')
     { newImage('ground.png');
      console.log("g");
     } if(keyPressed == '76')
      { newImage('light_green.png');
       console.log("l");
       } if(keyPressed == '84') 
       { newImage('trunk.jpg'); 
       console.log("t"); 
      } if(keyPressed == '82') 
      { newImage('roof.jpg'); 
      console.log("r");
     } if(keyPressed == '89')
      { newImage('yellow_wall.png');
      console.log("y");
    } 
       if(keyPressed == '68')
      { newImage('dark_green.png'); 
     console.log("d");
     } if(keyPressed == '85')
      { newImage('unique.png'); console.log("u");
     } if(keyPressed == '67')
      { newImage('cloud.jpg'); console.log("c"); }






}


function up(){
if(playerY>=0){
playerY=playerY-blockImageHeight
console.log("autura da imagem do bloco = " + blockImageHeight); 
console.log("Quando a tecla direcional Cima for pressionada, X = " + playerX + " , Y = "+playerY);
canvas.remove(playerObject)
 playerUpdate()

}
}
function down(){
  if(playerY<=500){
    playerY=playerY+blockImageHeight
    console.log("autura da imagem do bloco = " + blockImageHeight); 
    console.log("Quando a tecla direcional baixo for pressionada, X = " + playerX + " , Y = "+playerY);
     canvas.remove(playerObject)
     playerUpdate()
}
}
function left(){
  if(playerX>0){
    playerX=playerX+blockImageWidth
    console.log("autura da imagem do bloco = " + blockImageWidth); 
    console.log("Quando a tecla direcional esquerda for pressionada, X = " + playerX + " , Y = "+playerY);
     canvas.remove(playerObject)
     playerUpdate()
}
}

function right(){
  if(playerX<=850){
    playerX=playerX+blockImageWidth
    console.log("autura da imagem do bloco = " + blockImageWidth); 
    console.log("Quando a tecla direcional direito for pressionada, X = " + playerX + " , Y = "+playerY);
     canvas.remove(playerObject)
     playerUpdate()
}
}
