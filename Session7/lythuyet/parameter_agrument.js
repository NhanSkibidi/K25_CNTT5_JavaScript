/*
    Tham Số:PARAM : giá trị được khai báo trực tiếp trong hàm
    Đối Số : ARGUMENT : giá trị khi được gọi hàm
    ===> Giúp hàm có khả năng tải sử dụng (Viết 1 làn dùng nhiều lần)

    RETURN ; TRẢ VỀ KẾT THÚC CỦA HÀM
    + Chỉ  dùng với hàm
    + Không được viết câu lệnh sau return

    */
   // Chó măng số nguyên bất kì tính tổng các số nguyên trong mảng

let numbers1 = [1, 3, 5, 7, 6];
let numbers2 = [2, 4, 6, 3, 5];
function totalnumbers(param) {
    let sum = 0;
    for (let index = 0; index < param.length; index++) {
        sum += param[index];
    }
    console.log("tong cac so trong mang " + param + " = " + sum);
}
totalnumbers(numbers1);
totalnumbers(numbers2);


