var myString1 = "Sports in Malaysia are an important part of Malaysian";
var myString2 = 'Sports i';
var strLength = 0;
// lay chieu dai cua 1 chuoi
strLength = myString1.length;

console.log(strLength);
console.log(myString2.length);


var searchI = 0;
// tim vi tri cua 1 ky tu trong chuoi (lay vi tri dau tien tim thay)
searchI = myString1.indexOf('i');
console.log(searchI);
// tim vi tri cua 1 ky tu trong chuoi (lay vi tri dau tien tim thay),
//nhung bat dau tu vi tri nao? (o vi du la vi tri so 9)
console.log(myString1.indexOf('i', 9));

// tim vi tri cua 1 ky tu trong chuoi (lay vi tri cuoi tim thay)
var searchIlast = 0;
searchIlast = myString1.lastIndexOf('i');
console.log(searchIlast);

// thay the ky tu trong chuoi
var replaceStr = '';
replaceStr = myString1.replace(/a/g, 'b');
replaceStr = replaceStr.replace('Malaysian', 'Vietnamese');
console.log(replaceStr);

//cat chuoi tu vi tri den vi tri
var cutStr1 = '';
cutStr1 = myString1.substring(1, 3);
console.log(cutStr1);

//cat chuoi tu vi tri, voi chieu dai mong muon
var cutStr2 = '';
cutStr2 = myString1.substr(1, 4);
console.log(cutStr2);


// viet hoa toan bo chuoi
var upperStr = '';
upperStr = myString1.toUpperCase();
console.log(upperStr);

// viet thuong toan bo chuoi
var lowerStr = '';
lowerStr = myString1.toLowerCase();
console.log(lowerStr);

// Lay noi dung cua vi tri trong chuoi
console.log(myString1.charAt(1));