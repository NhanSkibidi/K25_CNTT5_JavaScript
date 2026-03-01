// Crud object
let person = {};
console.log(typeof person); //object 

// Thuộc Tính
let person2 ={
    fullName: "SUKBLYAT",
    age: 36,
    ilovesex: "famale" ,
    
};
//READ
// Dot notation, bracket notation

//Dot
console.log(`Ten cua ban la: $(person2.fulName)`);
// bracket

//update
person2.fullName="Chimkhunglong";
console.log("Sau khi bi NTR",person2);
//Create thuộc tính
person2.email = "KUKUKAKA@gmail.com";
console.log("person2");
// Cachs 2
let person3={
    fullName: "SUKBLYAT",
    age: 36,
    ilovesex: "famale" ,
    ...person
};
console.log(person3)
//delete
delete person3.sex //loss sex 
console.log(person3);
// Duyệt Object
console.log(Object.keys(person3));
console.log(Object.values(person3));
console.log(Object.entries(person3));
// Distractory
for (const [key,vailue] of Object.entries(person3)){
    console.log(`key la ${key}, vailue la: ${vailue}`);
};
//Crud mảng Object
    let players = [
    {id: 0, name: "Aizen", age: 10000, Hado: 99},
    {id: 1, name: "Bankai", age: 9, Hado: 63},
    {id: 2, name: "Ichigo", age: 18, Hado: 36},
    {id: 3, name: "Yhwach", age: 30000, Hado: 99}
];
//Hiển thị cầu thủ 