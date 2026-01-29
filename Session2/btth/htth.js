let username = prompt("Nhap username:");
let role = prompt("vai tro ban la (admin/student/guest):").toLowerCase();
let account_balance = Number(prompt("so du tai khoan"));
let card_status = prompt("moi nhap trang thai the").toLowerCase(); // true / false
let date = Number(prompt("so ngay qua han tra sach"));

// kiểm tra vai trò
if (role === "admin") {
    console.log(`chào ${role} bạn có toàn quyền hệ thống!`);
} else if (role === "student") {
    console.log(`chào ${role} bạn có thể mượn sách`);
} else if (role === "guest") {
    console.log(`chào ${role} bạn chỉ có thể đọc sách tại chỗ`);
} else {
    console.log("lỗi vai trò");
}

// kiểm tra điều kiện mượn sách
let check = username && (role === "admin" || role === "student") && account_balance > 0 && card_status === "true";
if (check) {
    console.log("Đủ điều kiện mượn sách");
} else {
    console.log("Không đủ điều kiện");
}
// Tính phạt
if (date <= 0) {
    console.log("Cảm ơn bạn đã trả đúng hạn");
} else if (date >= 1 && date <= 5) {
    console.log("Tổng tiền phạt:", date * 5000);
} else if (date <= 10) {
    console.log("Tổng tiền phạt:", date * 10000);
} else if (date > 10) {
    console.log("Phạt 36.000 VNĐ, khóa tài khoản");
    card_status = false;
} else {
    console.log(`${date} không hợp lệ!`);
}
// khe luon
