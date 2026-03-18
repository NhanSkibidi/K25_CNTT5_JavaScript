let products = JSON.parse(localStorage.getItem('products_data')) || [
    { code: "SP001", name: "Laptop Dell XPS 15", price: 25000000 },
    { code: "SP002", name: "iPhone 15 Pro Max", price: 32900000 },
    { code: "SP003", name: "Samsung Galaxy S24 Ultra", price: 28900000 },
    { code: "SP004", name: "Tai nghe AirPods Pro 2", price: 5990000 },
    { code: "SP005", name: "Bàn phím cơ Logitech MX Keys", price: 2990000 }
];

let isEditing = false;
let currentEditingCode = "";

const productForm = document.getElementById('contact-form');
const tbody = document.getElementById('contact-tbody');
const submitBtn = productForm.querySelector('button[type="submit"]');

const inputCode = document.getElementById('contact-name'); 
const inputName = document.getElementById('contact-phone'); 
const inputPrice = document.getElementById('contact-email'); 

function saveToLocal() {
    localStorage.setItem('products_data', JSON.stringify(products));
}

function renderProducts() {
    tbody.innerHTML = "";
    products.forEach((p, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${p.code}</td>
            <td>${p.name}</td>
            <td>${p.price.toLocaleString('vi-VN')} đ</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" data-code="${p.code}">Sửa</button>
                    <button class="btn-delete" data-code="${p.code}">Xóa</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function validate(code, name, price) {
    if (!code) {
        alert("Mã sản phẩm không được để trống!");
        return false;
    }
    if (!isEditing && products.some(p => p.code === code)) {
        alert("Mã sản phẩm đã tồn tại!");
        return false;
    }
    if (!name) {
        alert("Tên sản phẩm không được để trống!");
        return false;
    }
    if (name.length < 3) {
        alert("Tên sản phẩm phải có ít nhất 3 ký tự!");
        return false;
    }
    if (!price) {
        alert("Giá sản phẩm không được để trống!");
        return false;
    }
    if (isNaN(price) || Number(price) < 1000) {
        alert("Giá sản phẩm phải là số dương và tối thiểu 1,000 đ!");
        return false;
    }
    return true;
}
productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = inputCode.value.trim();
    const name = inputName.value.trim();
    const price = inputPrice.value.trim();
    if (!validate(code, name, price)) return;
    if (isEditing) {
        const index = products.findIndex(p => p.code === currentEditingCode);
        products[index] = { code, name, price: Number(price) };
        alert("Cập nhật sản phẩm thành công!");
        isEditing = false;
        currentEditingCode = "";
        submitBtn.innerText = "Thêm";
        inputCode.disabled = false;
    } else {
        products.push({ code, name, price: Number(price) });
        alert("Thêm sản phẩm thành công!");
    }
    saveToLocal();
    renderProducts();
    productForm.reset();
});
tbody.addEventListener('click', (e) => {
    const code = e.target.getAttribute('data-code');
    if (!code) return;
    if (e.target.classList.contains('btn-delete')) {
        if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
            products = products.filter(p => p.code !== code);
            saveToLocal();
            renderProducts();
            alert("Xóa sản phẩm thành công!");
            if (isEditing && currentEditingCode === code) {
                productForm.reset();
                isEditing = false;
                submitBtn.innerText = "Thêm";
                inputCode.disabled = false;
            }
        }
    }
    if (e.target.classList.contains('btn-edit')) {
        const p = products.find(item => item.code === code);
        if (p) {
            inputCode.value = p.code;
            inputName.value = p.name;
            inputPrice.value = p.price;
            isEditing = true;
            currentEditingCode = code;
            submitBtn.innerText = "Update zia zia";
            inputCode.disabled = true;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
});
renderProducts();