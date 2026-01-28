/*
 Biến là gì? dùng để lưu trữ dữ liệu

 3 Cách khai báo biến 
  1. var
+ có thể khai báo lại
+ có thể gán lại giá trị
+ phạm vi truy cập function
+ có hotsting truy cập được
2. let sinh ra ở bản ES6 (2015)
+ không thể khai báo lại
+ có thể gán lại giá trị
+ phạm vi block scope {}
3. const sinh ra ở bản ES6 (2015) : thường dùng khai báo hẳng số
+ không thể khai báo lại
+ không thể gán lại giá trị
+ phạm vi block scope {}
+ có hotsting nhưng ko truy cập được

  Quy Tắc Đặt Tên Biến : Không bắt đầu bằng số , kí tự đặc biệt
  + tránh trùng từ khóa đặc biệt ( let, const, var , class , function....)
  + theo quy tắc con lạc đà ( camel_case)
  + phân biệt hoa thường
 */
var fullname = "OMEN"
var fullname = "JETT"
    fullname = "Pho"
{
    var a = 8;
    a=5;
    {
        {
            a = 3667
            
        }
    }
}
console.log("giá trị a",a);