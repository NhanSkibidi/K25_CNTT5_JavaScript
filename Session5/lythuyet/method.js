/*
Cách phuong thuc lam viec voi mang
1. indexOf() : kiểm tra xem phần tử có tồn tại trong mảng không?
    +Nếu có trả về index
    +Nếu không có trả về -1
2. includes(): kiểm tra phần tử có tồn tại trong mảng hay không
    +trả về true || false
3. reverse() : đảo ngược các phần tử trong mảng
4. join()    : nối các phần tử mảng thành string
5. 
     */
let students = ["Thu", "Hoa", "Hong", "Lan"];
let result = students. indexOf("Lan");
// console.log("result: ", result);

if(result !=- 1){
students.splice(result,1);
}else{
console. log("sinh viên không tồn tại!");}


let course=["HTML","CSS","JS"];
console.log(course.join("&"));
let fullname="lEE_MIN SKIBIDI"
console.log(fullname.split("_"));

let courses= ["HTML", "CSS","JS", "PYTHON", "JAVA"]; // HTML_CSS_JS
let slice_course= courses.slice(0,3);
console.log("slice_course",slice_course);

let scores=[7,8,9,3,6,6,7];
let max=0;
let sum=0;
let tb;
for(let i =0;i<scores.length;i++){
    sum+=scores[i]
    if(max<[i]){
        max=scores[i];
    }
}
console.log("max",max);
tb=sum/scores.length;
console.log("tb",tb);

let point = [7, 8, 4, 5, 6];
for (let i = 0; i < point. length-1; i++) {
for (let j = 0; j < point. length; j++) {

if(point[j]>point[j+1]){
let temp = point[j];
point[j]= point[j+1];
point[j+1]= temp;
}
}
}
console.log(point);