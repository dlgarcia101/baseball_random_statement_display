
// random baseball msg program


// list of diff arrays for msg
let players =['Barry Bonds','Jose Canceco','Mark Maquire','Frank Thomas','Alex Rodgriguez'];
let league = ['national','american'];
let year = ['1993','2001','1999','2010','2011'];
let category = ['home runs','steals','rbi','strike outs','walks'];


// pick random number for array picks
const rndSelector = (arr) =>{
	let rndPick = Math.floor(Math.random()* arr.length);
	return rndPick;
}

// select button & display
let getMsgBtn = document.querySelector('button')
let displayElement = document.querySelector('p');


function seeRndMsg(){
	displayElement.innerHTML = `in ${year[rndSelector(year)]} ${players[rndSelector(players)]} lead the ${league[rndSelector(league)]} league in ${category[rndSelector(category)]}`;
	getMsgBtn.style.backgroundColor = 'pink';
}

  getMsgBtn.addEventListener('click',seeRndMsg);
