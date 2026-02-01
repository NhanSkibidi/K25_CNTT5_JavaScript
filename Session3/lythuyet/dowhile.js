/*

*/
let choose;
do {
choose = +prompt ("mời nhập lựa chọn");
switch (choose){
case 1:
console.log("chọn chức năng 1");
break;
case 2:
console.log("chọn chức năng 2");
break;
default:
console. log( "lựa chọn không hợp lệ ");
break;
}
}while (choose != 3);