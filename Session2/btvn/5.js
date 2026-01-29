let name=prompt("ten:");
let publishYear=Number(prompt("xuat ban:"));
let status=prompt("Status- (co san/da muon):").toLowerCase();
let currentYear=new Date().getFullYear();
let age=currentYear - publishYear;

if (status === "có sẵn" && age <= 5) {
    console.log("Sách này mới và có sẵn để mượn");
} else if (status === "đã mượn" && age <= 10) {
    console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
} else if (status === "đã mượn" && age > 10) {
    console.log("Sách này đã mượn và khá cũ");
} else if (status === "có sẵn" && age > 5) {
    console.log("Sách này có sẵn nhưng đã lâu năm");
} else {
    console.log("Thông tin sách không hợp lệ");
}