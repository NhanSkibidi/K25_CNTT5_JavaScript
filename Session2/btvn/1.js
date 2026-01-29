let bookName = prompt("Tên sách:");
let author = prompt("Tác giả:");
let publishYear = Number(prompt("Nhập năm xuất bản:"));
let now = new Date().getFullYear();
console.log("Tên sách:", bookName);
console.log("Tác giả:", author);
console.log("Năm xuất bản:", publishYear);

if (publishYear === now) {
    console.log("This is a new book!");
} else if (now - publishYear <= 5) {
    console.log("Quite new");
} else {
    console.log("Old book!");
}
