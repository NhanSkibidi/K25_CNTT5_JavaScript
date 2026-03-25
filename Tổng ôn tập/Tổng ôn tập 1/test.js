/*
    Quản Lý danh mục
    1.Dùng mảng lưu trữ tất cả danh mục 
    2.Dùng cái gì để mô tả danh mục : Object
    + 1 Danh mục có thông tin : Tên Danh Mục và ID Danh Mục
*/
let storage = [];
// Tạo Hàm trên danh mục
function addstorage() {
    console.log("Hàm đc gọi!");
    let storagename = document.getElementById("namehehe").value.trim();
    let storageID = document.getElementById("idhehe").value.trim();
    console.log("NAME", storagename);
    console.log("id vừa nhập:", storageID);
    // Kiểm tra ID trùng lặp
    let isDuplicate = false;
    for (let i = 0; i < storage.length; i++) {
        if (storage[i].id == storageID) {
            console.log("ID Đã có");
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate && storagename && storageID) {
        let obj = {
            id: storageID,
            namestorage: storagename
        };
        storage.push(obj);
        console.log("Đã thêm danh mục:", obj);
    } else if (isDuplicate) {
        alert("ID đã tồn tại!");
    } else {
        alert("Vui lòng nhập đầy đủ tên và ID!");
    }
}
let addtable =[];
function addtask (){
    const task = document.getElementById(`addtask`)
}