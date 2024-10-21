const rS = require('readline-sync');
var area = ["-","-","-","-","-","-","-","-","-"]
var dX = "x";
var dO = "o";
var player = false;
var update = 0;
function check() {
	update++;
	if (update >= 9) return false
    if (area[0] == dX && area[1] == dX && area[2] == dX) { 
		console.log("Player1 win")
		return false;
    }
    if (area[0] == dO && area[1] == dO && area[2] == dO) {
        console.log("Player2 win")
        return false;
    } 
    if (area[3] == dX && area[4] == dX && area[5] == dX) {
        console.log("Player1 win")
        return false;
    } 
    if (area[3] == dO && area[4] == dO && area[5] == dO) {
        console.log("Player2 win")
        return false;
    } 
    if (area[6] == dX && area[7] == dX && area[8] == dX) {
        console.log("Player1 win")
        return false;
    } 
    if (area[6] == dO && area[7] == dO && area[8] == dO) {
        console.log("Player2 win")
        return false;
    } 
    if (area[0] == dX && area[3] == dX && area[6] == dX) {
        console.log("Player1 win")
        return false;
    } 
    if (area[0] == dO && area[3] == dO && area[6] == dO) {
        console.log("Player2 win")
        return false;
    } 
    if (area[1] == dX && area[4] == dX && area[7] == dX) {
        console.log("Player1 win")
        return false;
    } 
    if (area[1] == dO && area[4] == dO && area[7] == dO) {
        console.log("Player2 win")
        return false;
    } 
    if (area[2] == dX && area[5] == dX && area[8] == dX) {
        console.log("Player1 win")
        return false;
    } 
    if (area[2] == dO && area[5] == dO && area[8] == dO) {
        console.log("Player2 win")
        return false;
    } 
    if (area[0] == dX && area[4] == dX && area[8] == dX) {
        console.log("Player1 win")
        return false;
    } 
    if (area[0] == dO && area[4] == dO && area[8] == dO) {
        console.log("Player2 win")
        return false;
    } 
    if (area[2] == dX && area[4] == dX && area[6] == dX) {
        console.log("Player1 win")
        return false;
    } 
    if (area[2] == dO && area[4] == dO && area[6] == dO) {
        console.log("Player2 win")
        return false;
    } return true
}
hod = rS.question("Player1:  ") - 1;
area[hod] = dX;
console.log(area);
while (check()) {
 	if (player) {
 		hod = rS.question("Player1:  ") -1;
 		while (area[hod] != "-") {
 			hod = rS.question("Player1 write new cell:  ") - 1;
 		}
 		area[hod] = dX;
 		console.log(area);
 		player = false;
 	} else {
 		hod = rS.question("Player2:  ") - 1;
 		 while (area[hod] != "-") {
 			hod = rS.question("Player2 write new cell:  ") - 1;
 		}
 		area[hod] = dO;
 		console.log(area);
 		player = true;
 	}
}
if (update == 9) {
    check();
    console.log("DRAW");
}