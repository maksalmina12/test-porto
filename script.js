document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    const htmlElement = document.documentElement;

    // Ambil elemen gambar logo yang akan dianimasikan
    const themeIcon = document.querySelector('.theme-icon'); // Ini tetap diambil untuk referensi, tapi tidak dianimasikan
    const mainLogo = document.querySelector('.main-logo-img');

    // --- PERUBAHAN DI SINI ---
    // Daftar logo yang akan dianimasikan (sekarang hanya logo utama)
    const logos = [mainLogo];

    // Cek tema yang tersimpan
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);

    // Tambahkan event listener untuk tombol ganti tema
    themeSwitcher.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Tambahkan class untuk memicu animasi
        logos.forEach(logo => logo.classList.add('logo-is-changing'));
    });

    // Hapus class animasi setelah selesai agar bisa diulang lagi
    logos.forEach(logo => {
        logo.addEventListener('animationend', () => {
            logo.classList.remove('logo-is-changing');
        });
    });
});
