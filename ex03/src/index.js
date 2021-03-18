// Create a temps array here 
var myPetsArray = ["Dog", "Cat"];
// End of creating array

function myArrayFunction(myPets) {
	var myNewPets = [...myPets];
	// Only change code above this line
	myNewPets.push("Bird", "Fish");
    var firstPet = myNewPets.shift();
    myNewPets.unshift(firstPet);
    var lastPet = myNewPets.pop();
    myNewPets.push(lastPet);
    myNewPets.unshift("Lion");
	myNewPets.pop();
	var tempVar = myNewPets.shift();
	myNewPets.shift();
	myNewPets.unshift(tempVar);
	return myNewPets;
	// Only change code above this line
}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;