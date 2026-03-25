let songs = JSON.parse(localStorage.getItem('spotify_songs')) || [];
let editIndex = -1;
const songTable = document.getElementById('songTable');
const titleInput = document.getElementById('title');
const artistInput = document.getElementById('artist');
const submitBtn = document.getElementById('submitBtn');
const formTitle = document.getElementById('formTitle');
const searchInput = document.getElementById('search');
function render(data = songs) {
    songTable.innerHTML = "";
    data.forEach((song, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${song.title}</td>
            <td>${song.artist}</td>
            <td>
                <button onclick="editSong(${index})">Sửa</button>
                <button onclick="deleteSong(${index})">Xóa</button>
            </td>
        `;
        songTable.appendChild(tr);
    });
    localStorage.setItem('spotify_songs', JSON.stringify(songs));
}
window.handleSubmit = () => {
    const title = titleInput.value.trim();
    const artist = artistInput.value.trim();

    if (!title || !artist) {
        alert("Vui lòng nhập đầy đủ tên bài hát và ca sĩ!");
        return;
    }
    if (editIndex === -1) {
        songs.push({ title, artist });
    } else {
        songs[editIndex] = { title, artist };
        editIndex = -1;
        submitBtn.innerText = "Thêm";
        formTitle.innerText = "Thêm bài hát";
    }

    titleInput.value = "";
    artistInput.value = "";
    render();
};

window.editSong = (index) => {
    const song = songs[index];
    titleInput.value = song.title;
    artistInput.value = song.artist;

    editIndex = index;
    submitBtn.innerText = "Cập nhật";
    formTitle.innerText = "Sửa bài hát";
    titleInput.focus();
};

window.deleteSong = (index) => {
    if (confirm(`Bạn có chắc muốn xóa bài "${songs[index].title}" không?`)) {
        songs.splice(index, 1);
        render();
    }
};
window.searchSong = () => {
    const keyword = searchInput.value.toLowerCase();
    const filteredSongs = songs.filter(song => 
        song.title.toLowerCase().includes(keyword)
    );
    render(filteredSongs);
};

render();