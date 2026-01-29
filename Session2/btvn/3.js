let name=prompt("ten:");
let category = prompt("the loai (Khoa học / Lịch sử / Văn học / Truyện):").toLowerCase();
let status = prompt("Status- (co san/da muon):").toLowerCase();
if (category === "khoa học" || category === "lịch sử") {
if (status === "co san") {
    console.log("co san ");
} else {
    console.log("da muon");
}
} else if (category === "văn học" || category === "truyện") {
    console.log("sach rat vui");
} else {
    console.log("wrong!");
}