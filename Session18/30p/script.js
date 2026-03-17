let products = JSON.parse(localStorage.getItem('product_list'))||[
    { code: "SP001", name: "Laptop Dell XPS 15", price: 25000000 },
    { code: "SP002", name: "iPhone 15 Pro Max", price: 32900000 },
    { code: "SP003", name: "Samsung Galaxy S24 Ultra", price: 28900000 },
    { code: "SP004", name: "Tai nghe AirPods Pro 2", price: 5990000 },
    { code: "SP005", name: "Bàn phím cơ Logitech MX Keys", price: 2990000 }
];
const form = document.getElementById('product-form');
const tbody = document.getElementById('product-tbody');
function saveToLocal() {
    localStorage.setItem('product_list', JSON.stringify(products));
}
function render() {
    tbody.innerHTML = products.slice(0, 5).map((p, i) => `
        <tr>
            <td>${i + 1}</td>
            <td>${p.code}</td>
            <td>${p.name}</td>
            <td>${p.price.toLocaleString('vi-VN')}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit" onclick="edit('${p.code}')">Sửa</button>
                    <button class="btn-delete" onclick="del('${p.code}')">Xóa</button>
                </div>
            </td>
        </tr>`).join('');
}
form.onsubmit = (e) => {
    e.preventDefault();
    const code = document.getElementById('product-code').value.trim();
    const name = document.getElementById('product-name').value.trim();
    const price = document.getElementById('product-price').value;
    if (!code) return alert("Mã sản phẩm không được để trống!");
    if (products.some(p => p.code === code)) return alert("Mã sản phẩm đã tồn tại!");
    if (name.length < 3) return alert("Tên sản phẩm phải có ít nhất 3 ký tự!");
    if (!price || Number(price) < 1000) return alert("Giá sản phẩm phải là số dương và tối thiểu 1,000 đ!");
    products.unshift({ code, name, price: Number(price) });
    form.reset();
    alert("Thêm sản phẩm thành công!");
    render();
};
window.del = (code) => {
    if (confirm("Xóa sản phẩm này?")) {
        products = products.filter(p => p.code !== code);
        render();
    }
};
window.edit = (code) => {
    const p = products.find(x => x.code === code);
    if (p) {
        document.getElementById('product-code').value = p.code;
        document.getElementById('product-name').value = p.name;
        document.getElementById('product-price').value = p.price;
        products = products.filter(x => x.code !== code);
        render();
    }
};
render();