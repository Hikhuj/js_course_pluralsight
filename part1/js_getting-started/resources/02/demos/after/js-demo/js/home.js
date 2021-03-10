let key = 42;

function getSecretCode(value){

	let keyGenerator = function(){
		let key = 12;
		console.log('in keyGenerator: ', key);
		return key;
	}

	let code = value * keyGenerator();
	// en esta parte del codigo el sistema busca la variable
	// key que esta fuera de su propia funcion por que 
	// jamas podra acceder a la que esta dentro
	console.log(' in getSecretCode: ', key);
	return code;
}

let secretCode = getSecretCode(2);
showMessage(secretCode);

