// 1. Khởi tạo dữ liệu (Lấy từ LocalStorage hoặc mặc định)
let products = JSON.parse(localStorage.getItem('tet_products')) || [
    { id: 1, name: "Bánh chưng thanh khúc", price: 150000 },
    { id: 2, name: "Giò lụa ước lễ", price: 180000 },
    { id: 3, name: "Cành Đào Nhật Tân", price: 500000 },
    { id: 4, name: "Mứt Tết Thập Cẩm", price: 120000 },
    { id: 5, name: "Lì Xì May Mắn", price: 20000 },
    { id: 6, name: "Dưa Hấu Khắc Chữ", price: 60000 },
];
let cart = [];
// 2. Truy vấn các phần tử DOM cố định
const productListContainer = document.getElementById("product-list");
const productForm = document.getElementById("product-form");
const cartList = document.getElementById("cart-list");
const totalPriceElement = document.getElementById("total-price");
const btnCheckout = document.getElementById("btn-checkout");
// 3. Hàm lưu dữ liệu
function saveToStorage() {
    localStorage.setItem('tet_products', JSON.stringify(products));
}
// 4. Hàm Render Sản phẩm (Phong cách Full DOM)
function renderProduct() {
    productListContainer.innerHTML = ""; // Xóa nội dung cũ
    products.forEach((product, index) => {
        // Tạo thẻ bao ngoài
        const card = document.createElement("div");
        card.className = "product-card";
        // Tạo nội dung bên trong (Avatar, Tên, Giá)
        card.innerHTML = `
            <img src="0DBFACC4-90D5-46AF-87F3-A41BED686505.gif" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price.toLocaleString()}đ</p>
        `;
        // Tạo div chứa nút bấm
        const btnGroup = document.createElement("div");
        btnGroup.className = "card-btns";
        // Nút "Thêm vô Giỏ"
        const btnAdd = document.createElement("button");
        btnAdd.className = "btn-add";
        btnAdd.textContent = "Thêm vô Giỏ";
        btnAdd.addEventListener("click", () => addToCart(product.id));
        // Nút "Xóa kệ"
        const btnDelete = document.createElement("button");
        btnDelete.className = "btn-delete";
        btnDelete.style.cssText = "background:gray; font-size:10px;";
        btnDelete.textContent = "Xóa kệ";
        btnDelete.addEventListener("click", () => deleteProduct(index));
        // Gắn các nút vào nhóm, nhóm vào thẻ card, card vào danh sách
        btnGroup.appendChild(btnAdd);
        btnGroup.appendChild(btnDelete);
        card.appendChild(btnGroup);
        productListContainer.appendChild(card);
    });
}
// 5. Hàm Render Giỏ hàng
function renderCart() {
    cartList.innerHTML = "";
    let total = 0;
    if (cart.length === 0) {
        cartList.innerHTML = `<li class="empty-msg">Chưa có món nào...</li>`;
        totalPriceElement.innerText = "0đ";
        return;
    }
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement("li");
        li.className = "cart-item";
        li.innerHTML = `
            <span>${item.name}</span>
            <span>${item.price.toLocaleString()}đ</span>
        `;
        const btnRemove = document.createElement("button");
        btnRemove.textContent = "❌";
        btnRemove.addEventListener("click", () => {
            cart.splice(index, 1);
            renderCart();
        });
        li.appendChild(btnRemove);
        cartList.appendChild(li);
    });
    totalPriceElement.innerText = total.toLocaleString() + " VNĐ";
}
// 6.hàm Logic xử lý
function addToCart(id) {
    const item = products.find(p => p.id === id);
    if (item) {
        cart.push(item);
        renderCart();
    }
}
function deleteProduct(index) {
    if (confirm("Bạn muốn xóa sản phẩm này khỏi kệ?")) {
        products.splice(index, 1);
        saveToStorage();
        renderProduct();
    }
}

// 7.Lắng nghe sự kiện Form và Checkout
if (productForm) {
    productForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const nameInput = document.getElementById("product-name");
        const priceInput = document.getElementById("product-price");

        products.push({ 
            id: Date.now(), 
            name: nameInput.value, 
            price: Number(priceInput.value) 
        });
        saveToStorage();
        renderProduct();
        this.reset();
    });
}
if (btnCheckout) {
    btnCheckout.addEventListener("click", () => {
        if (cart.length === 0) return alert("Giỏ hàng trống!");
        alert("🧧 Cảm ơn bạn đã sắm Tết! Chúc mừng năm mới!");
        cart = [];
        renderCart();
    });
}
renderProduct();
renderCart();