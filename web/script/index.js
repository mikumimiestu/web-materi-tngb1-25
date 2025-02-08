function checkScreenSize() {
    // Jika lebar layar kurang dari 1024px, tampilkan peringatan
    if (window.innerWidth < 1024) {
      const warning = document.getElementById('warning');
      warning.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    } else {
      // Redirect ke halaman jika layar cukup besar
      window.location.href = "web/public/1.pendahuluan.html";
    }
  }

  function closeWarning() {
    const warning = document.getElementById('warning');
    warning.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  // Jalankan validasi saat halaman dimuat
  window.onload = checkScreenSize;

  // Jalankan validasi ulang jika ukuran layar berubah
  window.onresize = checkScreenSize;