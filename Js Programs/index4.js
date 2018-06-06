let allPeopleIWantToInvite = [];

let pushToPartyList = (...people) =>{//usage of REST
	let newPeopleArray = people;
	allPeopleIWantToInvite = allPeopleIWantToInvite.concat(newPeopleArray);
	console.log(allPeopleIWantToInvite);

	return allPeopleIWantToInvite;
}

pushToPartyList("Sharath","Rakesh","Sachin");
pushToPartyList("Hari","Pavan","Raghu");