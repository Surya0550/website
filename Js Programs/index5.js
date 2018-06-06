let sum = (x=0,y=0,z=0) =>{
	console.log(x);
	console.log(y);
	console.log(z);

	return x+y+z;
}

numbers = [1,2,3];

console.log(sum(...numbers));//usage of SPREAD