
let name = prompt("Nhập tên sách:");
let borrower = prompt("Nhập tên người mượn:");
let status = prompt("Nhập tình trạng sách (có sẵn / đã mượn / không có sẵn):").toLowerCase();
let days = Number(prompt("Nhập số ngày mượn:"));
let card = prompt("Bạn có thẻ thư viện không? (có / không):").toLowerCase();

if (status === "có sẵn" && card === "có") {
    console.log("Chúc mừng, bạn có thể mượn sách này");
} 
else if (status === "đã mượn" && days < 30) {
    if (card === "có") {
        console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
    } else {
        console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
    }
} 
else if (status === "không có sẵn") {
    console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");
} 
else {
    console.log("Thông tin không hợp lệ, vui lòng nhập lại");
}
