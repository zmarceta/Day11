// Create a temps array here 
var temps = [
	[31, 32, 19, 37],
	[29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
	[91, 27, 31, 61]
];
// End of creating array

function myArrayFunction(arr) {
	var newTemps = [...arr];
	var averageDayTemp = [];
	// Only change code above this line
	for (var i = 0; i < newTemps.length; i++)
	{
		var innerArrayLength = newTemps[i].length;
		var avgTmp = 0;		
		for (var j = 0; j < innerArrayLength; j++)
		{
			avgTmp += newTemps[i][j];
		}
		averageDayTemp.push(avgTmp / innerArrayLength);
	}
	return averageDayTemp;
	;
	// Only change code above this line
}

console.log(myArrayFunction(temps));
module.exports = myArrayFunction;