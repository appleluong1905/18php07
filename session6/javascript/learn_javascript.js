var x = 5;
// Quy tắc đặt tên biến
// 1. Không đặt trùng từ khoá
// 2. không có ký tự đặc bịêt - 
// chứa chữ cái hoa hoặc thuờng hoặc số và dấu gạch duới 
// 3. Không bắt đầu bằng số
// 4. Bằng tiếng Anh
// 5. Có ý nghiã
// 6. Quy tắc camel
document.write(x);
// BT1: Đặt tên biến cho các dữ liệu sau: Họ và tên, Tuổi, 
// Ngày sinh, Số điện thoại
var FullName; /* var a; */
var Age; /* var b; */
var Birthday;
var Phone = '0988794607';

// +, -, *, /, %,
// ==, >, <, >=, <=, !=
document.write('<br>');
function FuntionName() {
	document.write("Test function");
}
FuntionName();
document.write('<br>');
function TestFuntion(a = 3, b = 4) {
	return a + b;
}
document.write('<br>');
document.write(TestFuntion(4, 5));

document.write('<br>');
document.write(TestFuntion(7, 8));

document.write('<br>');
document.write(TestFuntion());

document.write('<br>');
document.write(TestFuntion(8));

var n = TestFuntion(5, 7);
console.log(n);

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