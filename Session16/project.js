//1. Khởi tạo dữ liệu và biến toàn cục
let employees = [
    { id: 1, fullName: "Nguyễn Văn A", email: "a.nguyen@example.com", dateOfBirth: "1995-01-01", position: "Nhân viên" },
    { id: 2, fullName: "Trần Thị B", email: "b.tran@example.com", dateOfBirth: "1993-03-12", position: "Trưởng nhóm" }
];
let editId = null; //Biến để kiểm tra đang sửa nhân viên nào
const form = document.getElementById('employeeForm');
const tableBody = document.getElementById('employeeTableBody');
//2. Hàm Render (Hiển thị danh sách)
function renderTable() {
    tableBody.innerHTML = "";
    employees.forEach(emp => {
        // Format ngày dd/mm/yyyy
        const date = new Date(emp.dateOfBirth);
        const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
        const row = `
            <tr>
                <td>${emp.id}</td>
                <td>${emp.fullName}</td>
                <td>${emp.email}</td>
                <td>${formattedDate}</td>
                <td>${emp.position}</td>
                <td>
                    <button class="btn-edit" onclick="editEmployee(${emp.id})">Sửa</button>
                    <button class="btn-delete" onclick="deleteEmployee(${emp.id}, '${emp.fullName}')">Xóa</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
    updateStats();
}
// 3. Hàm Thêm/Cập nhật nhân viên
form.onsubmit = function(e) {
    e.preventDefault();
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const position = document.getElementById('position').value;
    // Validation cơ bản
    if (!fullName || !email || !dateOfBirth || !position) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    if (!email.includes('@')) {
        alert("Email không đúng định dạng!");
        return;
    }
    if (editId) {
        // Chế độ Cập nhật
        const index = employees.findIndex(emp => emp.id === editId);
        employees[index] = { id: editId, fullName, email, dateOfBirth, position };
        editId = null;
    } else {
        // Chế độ Thêm mới
        const newId = employees.length > 0 ? employees[employees.length - 1].id + 1 : 1;
        employees.push({ id: newId, fullName, email, dateOfBirth, position });
    }
    resetForm();
    renderTable();
};
// 4. Hàm Sửa nhân viên
window.editEmployee = function(id) {
    const emp = employees.find(e => e.id === id);
    if (!emp) return;
    editId = id;
    document.getElementById('fullName').value = emp.fullName;
    document.getElementById('email').value = emp.email;
    document.getElementById('dateOfBirth').value = emp.dateOfBirth;
    document.getElementById('position').value = emp.position;
    document.getElementById('formTitle').innerText = "Chỉnh Sửa Nhân Viên";
    document.getElementById('btnSubmit').innerText = "Cập Nhật";
    document.getElementById('btnCancel').style.display = "inline-block";
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// 5. Hàm Xóa nhân viên
window.deleteEmployee = function(id, name) {
    if (confirm(`Bạn có chắc chắn muốn xóa nhân viên ${name}?`)) {
        employees = employees.filter(emp => emp.id !== id);
        if (editId === id) resetForm(); // Nếu đang sửa mà bị xóa thì reset form
        renderTable();
    }
};
// 6. Hàm Hủy & Reset Form
function resetForm() {
    editId = null;
    form.reset();
    document.getElementById('formTitle').innerText = "Thêm Nhân Viên Mới";
    document.getElementById('btnSubmit').innerText = "Thêm Nhân Viên";
    document.getElementById('btnCancel').style.display = "none";
}
document.getElementById('btnCancel').onclick = resetForm;
// 7. Cập nhật thống kê
function updateStats() {
    const count = employees.length;
    document.querySelector('.badge').innerText = `${count} nhân viên`;
    document.querySelector('.footer span').innerText = `Tổng số nhân viên: ${count}`;
}
renderTable();