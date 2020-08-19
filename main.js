const canvas = document.getElementById('canvas')
const paper = canvas.getContext('2d')

const voidd = document.getElementById('void')
const info_weight = document.getElementById('info-weight')

/*const planetas = {
	url1: 'marte.png',
	url2: 'jupiter.png',
	url3: 'mercurio.png',
	url4: 'venus.png'
}*/

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

	if(xInit == 368 && yInit == 268 - 32 * 6){
		voidd.style.display = 'none'
		info_weight.style.display = 'block'
		marte()
	}else{
		info_weight.innerHTML = '.'
	}

	if(xInit == 368 && yInit == 268 + 32 * 7){
		voidd.style.display = 'none'
		info_weight.style.display = 'block'
		venus()
	}

	if(xInit == 368 + 32 * 10 && yInit == 268){
		voidd.style.display = 'none'
		info_weight.style.display = 'block'
		mercurio()
	}

	if(xInit == 368 - 32 * 10 && yInit == 268){
		voidd.style.display = 'none'
		info_weight.style.display = 'block'
		jupiter()	
	}
		
}

function clearPj(){
	paper.clearRect(xInit, yInit, 64, 64)
}

// peso 

const weight = document.getElementById('numberWeight')
const g_tierra = 9.8
const g_marte = 3.7
const g_jupiter = 24.8
const g_mercurio = 3.7
const g_venus = 8.87

let peso_final


function marte(){ 
	peso_final = weight.value * g_marte / g_tierra;
	info_weight.innerHTML = '<strong>Tu peso en Marte es ' + peso_final.toFixed(2) + ' kilos!</strong>'
}

function jupiter(){
	peso_final = weight.value * g_jupiter / g_tierra;
	info_weight.innerHTML = '<strong>Tu peso en Jupiter es ' + peso_final.toFixed(2) + ' kilos!</strong>'
}

function mercurio(){
	peso_final = weight.value * g_mercurio / g_tierra;
	info_weight.innerHTML = '<strong>Tu peso en Mercurio es ' + peso_final.toFixed(2) + ' kilos!</strong>'
}

function venus(){
	peso_final = weight.value * g_venus / g_tierra;
	info_weight.innerHTML = '<strong>Tu peso en Venus es ' + peso_final.toFixed(2) + ' kilos!</strong>'
}
