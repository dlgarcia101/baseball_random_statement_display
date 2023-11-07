
// random baseball msg program

let players =['Barry Bonds','Jose Canceco','Mark Maquire','Frank Thomas','Alex Rodgriguez'];
let league = ['national','american'];
let year = ['1993','2001','1999','2010','2011'];
let category = ['home runs','steals','rbi','strike outs','walks'];

//'in ${year} ${playersName} lead the ${League} in ${category} ' 

const rndSelector = (arr) =>{
	let rndPick = Math.floor(Math.random()* arr.length);
	return rndPick;
}

let randomMsg = `in ${year[rndSelector(year)]} ${players[rndSelector(players)]} lead the ${league[rndSelector(league)]} league in ${category[rndSelector(category)]}`;


// select button & display
let getMsgBtn = document.querySelector('button')
let displayElement = document.querySelector('p');

function seeRndMsg(){
	displayElement.innerHTML = randomMsg;
	getMsgBtn.style.backgroundColor = 'pink';
  
  }
  
  getMsgBtn.onclick = seeRndMsg;
 

  






console.log(`in ${year[rndSelector(year)]} ${players[rndSelector(players)]} lead the ${league[rndSelector(league)]} league in ${category[rndSelector(category)]}`);

