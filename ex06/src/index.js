// Only change code above this line

function multiplyArrayFunction(myArray) {
	var myNewArray = [...myArray];
	var arr = new Array();
	var product = 1;
	var sum = 0;	
	for (var i = 0; i < myNewArray.length; i++)
	{
		var innerArrayLength = myNewArray[i].length;
		for (var j = 0; j < innerArrayLength; j++)
		{
			product *= myNewArray[i][j];
			sum += myNewArray[i][j];
		}		
	}
	arr.push(product, sum);
	return arr;
}
// Only change code above this line

console.log(multiplyArrayFunction([[2], [5,6,7], [8,9]]));
console.log(multiplyArrayFunction([[2.5,2], [0.5,0.2], [8]]));
console.log(multiplyArrayFunction([[1,2], [3,4,5,6], [7,8,9]]));
module.exports = multiplyArrayFunction;