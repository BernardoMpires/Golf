var canvas = new fabric.canvas("myCanvas");
// Crie uma variável canvas

//Defina as posições iniciais da bola e do buraco.
ball_X = 0;
ball_Y = 0;
hole_Y = 400;
hole_X = 800;

block_image_width = 5;
block_image_height = 5;

function loadImg(){
	// Escreva o código para enviar a imagem da bola de golfe ao canvas
	fabric.Image.fromURL("gol-h.png", function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	    });
	newImage();
}

function newImage()
{
	fabric.Image.fromURL("gol-h.png", function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	    });
		// Escreva o código para enviar a imagem da bola ao canvas
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
	}
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_Y >=0){
			ball_Y = ball_Y - block_image_height;
			console.log("Altura da imagem do bloco t =" + block_image_height);
			console.log("Quando a tecla direcional Cima for pressionada, X =" + playerX + " , Y = "+playerY);
			canvas.remove(ball_obj);
			newImage();
		}
		// Escreva o código para mover a bola para cima.
	}

	function down()
	{
		if(ball_Y <=450){
			ball_Y = ball_Y - block_image_height;
			console.log("Altura da imagem do bloco t =" + block_image_height);
			console.log("Quando a tecla direcional Baixo for pressionada, X =" + playerX + " , Y = "+playerY);
			canvas.remove(ball_obj);
			newImage();
		}
		// Escreva o código para mover a bola para baixo.
	}

	function left()
	{
		if(ball_X >5)
		{
			ball_X = ball_X + block_image_width;
			console.log("Altura da imagem do bloco t =" + block_image_width);
			console.log("Quando a tecla direcional Baixo for pressionada, X =" + playerX + " , Y = "+playerY);
			canvas.remove(ball_obj);
			newImage();
			// Escreva o código para mover a bola para a esquerda.
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			ball_X = ball_X - block_image_height;
			console.log("Altura da imagem do bloco t =" + block_image_width);
			console.log("Quando a tecla direcional Baixo for pressionada, X =" + playerX + " , Y = "+playerY);
			canvas.remove(ball_obj);
			newImage();
			// Escreva o código para mover a bola para a direita.
		}
	}
	
}

