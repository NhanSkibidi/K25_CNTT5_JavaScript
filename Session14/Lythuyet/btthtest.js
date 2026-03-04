let  products = [
    {
        id: 1,
        name: "Bánh chưng thanh khúc",
        price: 150.000
    },
    {
        id: 2,
        name: "Giò lụa ước lễ",
        price: 180.000
    },
    {
        id: 3,
        name: "Cành Đào Nhật Tân",
        price: 500.000
    },
    {
        id: 4,
        name: "Mứt Tết Thập Cẩm",
        price: 120.000
    },
    {
        id: 5,
        name: "Lì Xì May Mắn",
        price: 20.000
    },
    {
        id: 6,
        name: "Dưa Hấu Khắc Chữ",
        price: 60.000
    },
];

function renderProduct(){
    let html="";
    for (let i=0;i <products.length;i++){
        html+=`<div class="product-card">
                <img src="/img/banhchung.webp" alt="">
                <h3>${products[i].name}</h3>
                <p class="price">${products[i].price}</p>
                <button class="btn-add">Thêm vào gio</button>
        
        `
    }
    document.getElementById("product-list").innerHTML =html;

}
renderProduct();
function rendercard(){
    let str = "";
    
}