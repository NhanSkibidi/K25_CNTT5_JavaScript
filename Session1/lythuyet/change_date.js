/*
Chuyển kiểu dữ liệu
1. string -- > number
    + Number
    +parseInt ( chuyển sang số nguyên)
    +parseFloat (chuyển số thực)
2. number -- > string

*/
let a=prompt("mời nhập giá trị số a");
let b=+prompt("mời nhập giá trị số b");
let c= parseInt(prompt("nhap c"));
let sum = a + b + c; //"5"+"6"
console.log("giá trị Sum",sum);