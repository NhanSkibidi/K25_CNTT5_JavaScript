/*
Câu điều kiện 
1. IF-ELSE
VD : 1.IF-ELSE
let age = 19;I
//chỉ cần giá trị biểu thức là TRUTHY
if (age) {
console. log("đủ tuổi xem phim");
else {
console. log ("chưa đủ tuổi");
}
}

*/
let month = prompt ("mời nhập tháng trong năm");
switch (month) {
case 2:
console.log("tháng 2 có 28 | | 29 ngày");
break;
case 3:
console. log("tháng 3 có 31 ngày");
break;
case 4:
console.log("tháng 4 có 30 ngày");
break;
default:
console. log("tháng không tồn tại trong năm");
break;
}