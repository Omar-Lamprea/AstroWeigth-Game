const canvas = document.getElementById('canvas')
const paper = canvas.getContext('2d')



const planetas = {
	url1: 'marte.png',
	url2: 'jupiter.png',
	url3: 'mercurio.png',
	url4: 'venus.png'
}

const astronaut = {
	url: 'astronauta.png'
}



//load planets

/*planetas.marte = new Image();
planetas.marte.src = planetas.url1;
planetas.marte.addEventListener("load", cargarMarte);

planetas.jupiter = new Image()
planetas.jupiter.src = planetas.url2
planetas.jupiter.addEventListener("load", cargarJupiter)

planetas.mercurio = new Image()
planetas.mercurio.src = planetas.url3
planetas.mercurio.addEventListener("load", cargarMercurio)

planetas.venus = new Image()
planetas.venus.src = planetas.url4
planetas.venus.addEventListener("load", cargarVenus)


function cargarMarte(){
	paper.drawImage(planetas.marte, 236, 10)
}


function cargarJupiter(){
	paper.drawImage(planetas.jupiter, 0, 236)
}

function cargarMercurio(){
	paper.drawImage(planetas.mercurio, 462, 236)
}

function cargarVenus(){
	paper.drawImage(planetas.venus, 236, 462)
}


cargarMarte()
cargarJupiter()
cargarMercurio()
cargarVenus()
*/


//load astronaut

astronaut.pj = new Image()
astronaut.pj.src = astronaut.url
astronaut.pj.addEventListener("load", cargarAstronauta)

function cargarAstronauta(){
	paper.drawImage(astronaut.pj, 368, 268)
}

cargarAstronauta()


//mover astronauta

document.addEventListener('keydown', moveAstronaut)

const flechas = {
 	UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
}

let xInit = 368
let yInit = 268

const movement = 32


function moveAstronaut(evento){

	
	switch(evento.keyCode){
		case flechas.UP:
			clearPj()
			yInit = yInit - movement
			paper.drawImage(astronaut.pj, xInit, yInit)
			break

		case flechas.DOWN:
			clearPj()
			yInit = yInit + movement
			paper.drawImage(astronaut.pj, xInit, yInit)
			break

		case flechas.LEFT:
			clearPj()
			xInit = xInit - movement
			paper.drawImage(astronaut.pj, xInit, yInit)
			break

		case flechas.RIGHT:
			clearPj()
			xInit = xInit + movement
			paper.drawImage(astronaut.pj, xInit, yInit)
			break
	}

	//position alerts

	if(xInit == 368 && yInit == 268 - 32 * 7){
		alert('llegaste a marte')
		document.getElementById('info').style.display = 'block'
	}

	if(xInit == 368 && yInit == 268 + 32 * 7){
		alert('llegaste a Venus!')
	}

	if(xInit == 368 + 32 * 10 && yInit == 268){
		alert('llegaste a Mercurio!')
	}

	if(xInit == 368 - 32 * 10 && yInit == 268){
		alert('llegaste a Jupiter!')
	}
		
}


function clearPj(){
	paper.clearRect(xInit, yInit, 64, 64)
}