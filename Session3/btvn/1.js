let wanna = Number(prompt("Hôm nay có bao nhiêu lần mượn sách?"));
for (let i = 1; i <= wanna; i++) {
    console.log(`Lần mượn ${i}`);
    let people = prompt("Người mượn:");
    let name = prompt("Tên sách:");
    let day;
    do {
        day = Number(prompt("Số ngày mượn (tối đa 14):"));
        if (day > 14) {
            console.log("Vượt quy định, vui lòng nhập lại!");
        }
    } while (day > 21);
    console.log("Qua han");
}
console.log("Tổng số lần mượn là:", wanna);
