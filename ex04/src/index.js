// Create a temps array here 
var monitorsListArray = ["Apple", "Peach", "Berry"];
// End of creating array

function myMonitorsFunction(arr) {
	var newMonitorsList = [...arr];
	// Only change code above this line
	var monitorsList = new Array();
	for (var i = 0; i < newMonitorsList.length; i++)
	{
		monitorsList.push([newMonitorsList[i], i+1]);
	}
	return monitorsList;
	// Only change code above this line
}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;