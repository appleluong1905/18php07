function checkString() {
	var myName = document.getElementById('name').value;
	var myNameTest = myName.toLowerCase();

	// kiem tra chu n trong ten (Cau 1)
	var check = true;
	check = (myNameTest.indexOf('n') != -1)?true:false;

	var ex1 = '';
	ex1 = check?"Trong ten ban co chu n":"Trong ten ban khong co chu n";
	document.getElementById('ex1').innerHTML = ex1;

	// Kiem tra trong ten co bao nhieu chu n
	var countN_MyName;
	countN_MyName = countCharInString('n', myName);
	document.getElementById('ex2').innerHTML = "Trong ten ban co " + countN_MyName + 
	" chu n";	
	



}
function countCharInString(myChar, myString) {
	var countN_MyName = 0;
	var myNameTmp = '';
	var posN = 0;
	myString = myString.toLowerCase();
	while(myString.indexOf(myChar) != -1) {
		posN = myString.indexOf(myChar);
		myNameTmp = myString.substring(posN + 1, myString.length);
		countN_MyName++;
		myString = myNameTmp;
	}
	return countN_MyName;
}