function totalNumber() {
	var a, b;
	a = document.getElementById('number_1').value;
	b = document.getElementById('number_2').value;
	a = parseInt(a);
	b = parseInt(b);
	document.getElementById('result').innerHTML = a + b;
	//"5" + "6";
}