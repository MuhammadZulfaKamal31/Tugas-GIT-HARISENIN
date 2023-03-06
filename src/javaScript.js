//==================================================================================================
// Menentukan elemen HTML yang akan diubah teksnya
const words = ['Belum Lulus Kuliah', 'Beda Jurusan', 'Kurang Pengalaman', 'Pindah Jalur Karir'];
const myText = document.getElementById('my-text');
setInterval(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    myText.innerHTML = words[randomIndex];
}, 2000);
//=================================================================================================

//===================================================================================================
//Mengatur formulir buat login
const tombol = document.getElementById('tombol');
const tutup = document.getElementById('tutup');
const pendaftaran = document.getElementById('pendaftaran');
//menambahkan class hidden   
tombol.addEventListener('click', function () {
    // Menghapus kelas 'hidden' dari div pendaftaran
    pendaftaran.classList.remove('hidden');
});
tutup.addEventListener('click', function () {
    // Menambahkan kelas 'hidden' pada div pendaftaran
    pendaftaran.classList.add('hidden');
});
//===================================================================================================

//===================================================================================================
//menambahkan dark mode
const toggle = document.getElementById('toggle-mode');
const body = document.body;
// Cek apakah mode tampilan sudah disimpan pada local storage
if (localStorage.theme === 'dark') {
    body.classList.add('dark');
    toggle.checked = true;
}
// Tambahkan event listener ketika toggle mode diubah
toggle.addEventListener('change', function () {
    // Tambahkan atau hapus kelas 'dark' pada body
    body.classList.toggle('dark');
    // Simpan mode tampilan pada local storage
    localStorage.theme = body.classList.contains('dark') ? 'dark' : 'light';
});
//===================================================================================================

