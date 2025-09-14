document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    const htmlElement = document.documentElement;

    // Cek tema yang tersimpan di localStorage saat halaman dimuat
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);

    // Tambahkan event listener untuk tombol ganti tema
    themeSwitcher.addEventListener('click', () => {
        // Dapatkan tema saat ini
        const currentTheme = htmlElement.getAttribute('data-theme');
        
        // Ganti tema
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', newTheme);
        
        // Simpan preferensi tema di localStorage
        localStorage.setItem('theme', newTheme);
    });
});
