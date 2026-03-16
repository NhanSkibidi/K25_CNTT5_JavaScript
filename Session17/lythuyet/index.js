/*
    Local storage : Dịch vụ lưu trữ dữ liệu trên trình duyệt 
    Dung Lượng :
    Local storage , session storage : tầm 5-10kb : 1MB-? 1024KB
    1 ảnh tầm 100kb
    local storage: lưu dữ liệu mãi mãi , tức là khi ta đóng trình duyệt , tắt máy thì dữ liệu không mất
    session storage : phiên làm việc , nếu đóng trình duyệt , tắt máy thì dữ liệu sẽ bị mất.
    Cách lưu dữ liệu
    Thao tác làm việc ( Lấy về , Cập Nhật , Xóa )

    1.Thao Tác Dữ Liệu
    localStorage.setItem("Tên giá trị cần lưu",Giá trị cần lưu)
    2.Lấy dữ liệu
    localStorage.getItem("tên Key");
    Khi lấy dữ dữ liệu dạng Array , Object thì phải chuyển sang định dạng ban đầu 
    JSON.prase(Giá trị lấy về)
    Khi Lưu trữ dữ liệu dạng Object và Array thì ta phải chuyển qua định dạng JSON
    Cách Chuyển định dạng JSON.stringify(giá trị)
    
    */
   //let fullname="Nayuta";
  //localStorage.setItem("fullname",fullname);
console.log(localStorage.getItem("fullname"))
//localStorage.removeItem("fullname");
//localStorage.clear();