/*
 1.forEach: một phương thức tích hợp sẵn của mảng trong JavaScript, cho phép lặp qua tất cả các phần tử của mảng và thực thi một hàm gọi lại (callback function) cho từng phần tử đó
 Vd:
 let arr=[35,53,36,63];
 arr.forEach(function(element,index){
    console.log(element,index)
    }) 
  2.map: map() là phương thức của mảng trong JavaScript dùng để:
   - Lặp qua tất cả các phần tử
   - Áp dụng một logic xử lý
   - Trả về một mảng mới
  vd:
  let arr=[35,53,36,63];
  let newarr = arr.map(function(element,index){
  return element+10;
  });
  console.log(newarr);
  3.filter:
  vd:
  let arr=[35,53,36,63];
  arr.filter(function(element,index){
   return element > 36 && element <63 ; \\ lọc điều kiện sẽ để sau return
   });

  */
  
 