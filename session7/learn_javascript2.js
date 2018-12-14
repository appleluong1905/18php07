// cau dieu kien
// if (dieu kien) {
	// neu dieu kien dung thi thuc hien lenh nay
// }

// if (dieu kien) {
	// neu dieu kien dung thi thuc hien lenh nay
// } else {
	// neu dieu kien sai thi thuc hien lenh nay 
// }

// if (dieu kien) {
	// neu dieu kien dung thi thuc hien lenh nay
// } elseif(dieu kien2) {
	// neu dieu kien 2 dung thi thuc hien lenh nay 
// } else {
	// neu dieu kien 2 sai thi thuc hien lenh nay 
// }

//switch case
var a = 4;
switch(a) {
	case 3:
		document.write("Day la so 3");
		break;
	case 5:
	case 6:
		document.write("Day la so 5 hay 6 gi do");
		break;
	default:
		document.write("So dac biet");
		break;
}
document.write("<br>");
var n = 4;
switch(n) {
	case 1: 
	case 2: 
	case 3: 
	case 4: 
	case 5: 
		document.write("Day la thang " + n);
		break;
}
document.write("<br>");

for(var i = 1; i <= 12; i++) {
	document.write("Day la thang " + i + "<br>");
}
var n = 1;
while(n <= 12) {
	document.write("Day la thang " + n + "<br>");
	n++;
}
var m = 1;
do {
	document.write("Day la thang " + m + "<br>");
	m++;
} while(m <= 12);