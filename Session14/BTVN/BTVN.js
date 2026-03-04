let  products = [
    {
        id: 1,
        name: "Bánh chưng thanh khúc",
        price: 150000
    },
    {
        id: 2,
        name: "Giò lụa ước lễ",
        price: 180000
    },
    {
        id: 3,
        name: "Cành Đào Nhật Tân",
        price: 500000
    },
    {
        id: 4,
        name: "Mứt Tết Thập Cẩm",
        price: 120000
    },
    {
        id: 5,
        name: "Lì Xì May Mắn",
        price: 20000
    },
    {
        id: 6,
        name: "Dưa Hấu Khắc Chữ",
        price: 60000
    },
];
 function renderProduct(){
    let html ="";
    for(let i=0;i<products.length;i++){
        html += `
        <div class="product-card">
        <img src="0DBFACC4-90D5-46AF-87F3-A41BED686505.gif" alt="">
        <h3>${products[i].name}</h3>
        <p class="price">${products[i].price}</p>
        <button class="btn-add" onclick="addToCart(${products[i].id})">Thêm vô Giỏ</button>
        </div>
        `;
    }
    document.getElementById("product-list").innerHTML=html;
 }
 renderProduct();
    function addToCart(id){
        const item = products.find(p=>p.id ===id);
        cart.push(item);
        renderCart;
    }
    function renderCart(){
        const cartlish= document.getElementById("card-list");
        const totalPriceElemental = document.getElementById("total-price");
    
    if(cartlish.length ===0){
        cartlish.innerHTML =`<li class="empty-msg">Chưa món nào</li>`;
        return;
    }
    let html="";
    let total = 0;
    for(let i=0;i< cart.length;i++){
        total+=cart[i].price;
        html+=`<li>
                <span class="cart-item-name">${cart[i].name}</span>
                <span class="cart-item-price">${cart[i].price}đ</span>
            </li>
        `;
    }
    cartlish.innerHTML=html;
    totalPriceElemental.innerText=total+"VND"
    }
    renderProduct();
    function deleteproduct(index){
        const accept = confirm("Bạn muốn xóa sản phẩm này!");
        if(accept){
            products.splice(index,1);
            renderProduct();
        }
    }
    const productForm = document.getElementById("product-form");
if (productForm) {
    productForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("product-name").value;
        const price = document.getElementById("product-price").value;
        const newProduct = {
            id: Date.now(),
            name: name,
            price: Number(price)
        };
        products.push(newProduct);
        renderProduct();
        productForm.reset();
    });
}
renderProduct();
