let generateEmail = (name, message) =>{//usage of arrow functions
	let emailMessage = 'Hi '+name+"\n"+
						"This can be the message for you- \n"
						+message+"\n GoodBye!";
	 return emailMessage;
}

console.log(generateEmail("Surya","How are you?"));
