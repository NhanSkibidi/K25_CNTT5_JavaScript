let name = prompt("name:");
let borrower = prompt("ten nguoi muon:");
let love = Number(prompt("love (1 - 5):"));
console.log("name:",name);
console.log("nguoi muon:", borrower);
console.log("like:", love);

if (love===5||love===4) {
    console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
} else if (love===3) {
    console.log("Sách này khá ổn, có thể mượn");
} else if (love===2 ||love===1) {
    console.log("Sách này bạn có thể cân nhắc mượn lại sau");
} else {
    console.log("Mức độ yêu thích không hợp lệ");
}