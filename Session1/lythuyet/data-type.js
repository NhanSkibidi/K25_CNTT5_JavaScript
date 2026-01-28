/*

Kiểu dữ liệu 
Trong Js chia thành 2 nhóm kiểu dữ liệu 
Nhóm I : nguyên thủy, đơn giản , primitive type, tham trị
    1. number
    2. string
    3. boolean
    4. null
    5. undefined
    6. NaN (not a number)
    7. symbol
Nhóm II : phức tạp, reference type , tham chiếu 
    1. function
    2. array
    3. object
*/
// number
let quantity=5;
let price=5000;
console.log("Giá",typeof(price));
//kiểu dữ liệu string
let email ="Skibidi@gmail.com"
console.log("Kiểu dữ liệu Email",typeof(email));

//kiểu dữ liệu boolean, true|false
let isLogin = true;

//undefined : 1 biến khai báo không gán giá trị
let age;

//null :
// ví dụ khi người dùng nhập promt mà nhận cancel gái trị sẽ là null

//NaN :
let result="Minh thư"/3;
console.log("result",result);
console.log("Kiểu dữ liệu result", Number.isNaN(result));

// Cách kiểm tra kiểu dữ liệu typeof