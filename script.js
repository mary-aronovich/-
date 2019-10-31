window.onload = function(){
	
	resetExercise();
	
	document.getElementById("check").addEventListener("click", function(){
		checkAnswer();
	});
	
	document.getElementById("next").addEventListener("click", function(){
		resetExercise();
	});

};

var counter = 0;
var totalPoint = 0;

function getNumber(){
	return Math.floor((Math.random() * 100) + 1);
}
function getSecNumber(firstNum) {
	return Math.floor((Math.random() * (100 - firstNum)) + 1);
}

function checkAnswer(){
	
	var answerEx = parseInt(num1.innerHTML) + parseInt(num2.innerHTML);
	var answerUser = sum.value;
	var ex = num1.innerHTML + " + " + num2.innerHTML;
	var point = 10;
	
	//console.log(answerEx);
	//console.log(answerUser);
	
	if(answerUser == ""){
		message.innerHTML = "יש להזין תשובה";
		return
	}else if (answerEx == answerUser){
		message.innerHTML = "כל הכבוד - תשובה נכונה";
		
	}else{
		message.innerHTML = "תשובה שגויה, ניתן לנסות שוב";
		point = 3;
	}
	
	counter++;
	totalPoint+=point;	
	var arr = [ex, answerEx, answerUser, point ];	
	createRowTable(arr);
	setTotal();
	resetExercise();
}

function resetExercise(){
	document.getElementById("num1").innerHTML = getNumber();
	document.getElementById("num2").innerHTML = getNumber();
	document.getElementById("sum").value = "";

}

function createRowTable(arr){ 

	var row = document.createElement("tr");
	var td;
	for (var i in arr){	
		textNode = document.createTextNode(arr[i]);
	td = document.createElement("td");
		td.appendChild(textNode);
		row.appendChild(td);
	}	
	document.getElementById("tableBody").appendChild(row);
}

function setTotal(){
	document.getElementById("points").innerHTML = "עד כה נצברו  " + totalPoint + " נקודות ";
}
			