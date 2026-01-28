// 1
let bookName = prompt("Nhap ten thu vien:").trim();
console.log('bookName',bookName);
// 2
let bookCount = prompt("Nhap so luong:").trim();
bookCount = Number(bookCount)
console.log("thu vien co" + bookCount + "cuon sach");
// 3
let oldbooks = prompt("nhap sach cu:");
let newbooks = prompt("nhao sach moi");
let totalbooks = oldbooks + newbooks;
console.log("tong to sach la" + totalbooks);
// 4
let anothername = prompt("Nhap ten khac:")
let realbooks = anothername;
let lowercase = anothername.toLowerCase();
let uppercase = anothername.toUpperCase();
console.log("ten ban dau la:" + realbooks);
console.log("khong viet hoa:" + lowercase);
console.log("viet hoa:"+ uppercase);
// 5
let publishYear = prompt("Nhap nam xuat ban cua sach:");
let currentYear = prompt("Nhap nam hien tai:");
publishYear = Number(publishYear);
currentYear = Number(currentYear);
let bookage = currentYear - publishYear;
console.log("sach:" + bookName);
console.log("nam xuat ban:"+publishYear);
console.log("tuoi cua sach:"+bookage);
// 6
let bookIndex = prompt("Nhap so thu tu cua sach:");
let originalName = bookName;
let normalizedName = bookName.trim().toUpperCase();
let bookCode = "LIB- " + normalizedName + " - " + bookIndex;
console.log("Ten sach goc: " + originalName);
console.log("Ma sach sau chuan hoa: " + bookCode);
