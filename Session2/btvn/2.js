let total = Number(prompt("Nhap so sach:"));

if (total < 10) {
    console.log("Thư viện có ít sách");
} else if (total <= 20) {
    console.log("Thư viện có số lượng sách vừa đủ");
} else {
    console.log("Thư viện có nhiều sách");
}