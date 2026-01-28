let bookName = prompt("mời nhập tên sách").trim().toUpperCase();
// console.log("bookName", bookName);

let bookAuthor = prompt("mời nhập tên tác gia").toUpperCase();

let year = prompt("nhập năm xuất bản");

let bookId = bookAuthor.trim().slice(0, 3) + year + "-" + (Math.floor(Math.random() * 1000) + 1);
console.log("bookId", bookId);

let price = prompt("nhập giá tiền 1 cuốn sách");
let quantity = prompt("số lượng nhập kho");

let bookYear = new Date().getFullYear() - year;
console.log("sach da duoc xuat ban duoc so nam la", bookYear);
let total = quantity * price;
//template string
console.log(`Tong gia tri nhap kho la ${total}`);
