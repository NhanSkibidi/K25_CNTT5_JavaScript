/*
INPUT: dữ liệu truyền vào
+ prompt: dữ liệu người dùng nhập vào
+ giá trị khi người dùng nhập có kiểu dữ liệu string
+ nếu không nhập nhan cancel giá trị sẽ là nu1l

OUTPUT: dữ liệu đầu ra
1. alert(): hộp thoại thông báo cho người dùng
2. console.log() : hiển thị kết quả để kiểm tra, debug...
3.document.write(): hiện thị ra trình duyệt
4. confirm xác nhận : confirm
*/
let fullName= prompt ("mời nhập tên");
console.log("fullname", fullName);
document.write("cố gắng học lập trình js");

let result= confirm("bạn đủ 18 tuổi chưa");
console.log(result);