const API_URL = `https:////fsa-crud-2aa9294fe819.herokuapp.com/api/2402-FTB-ET-WEB-FT/events`


const state = {
	parties: [],
}

const partyList = document.querySelector(`#artist-list`);

const getParties = async () => {
	try{
		const response = await fetch(API_URL); // fetch data from URL
		const json = await response.json(); // parse JSON from data 
		state.parties = json.data; // move data into state 
		console.log(state.parties) // log out state 
	} catch (error){ // catch any errors that ocurr 
		console.log(error); // log error to dev 
	}
}

getParties();

const renderParties = () => {
	state.parties.forEach((party) => {
		const li = document.createElement(`li`)
		li.innerHTML = `${party.name} - ${party.date} - ${party.location} - ${party.description}`
		partyList.appendChild(li);
	});
}

const render = async () => {
	await getParties();
	renderParties();
}

render();