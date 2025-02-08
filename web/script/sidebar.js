document.addEventListener('DOMContentLoaded', () => {
    const sidebar = `
      <aside class="w-64 bg-gray-800 h-screen p-4 fixed top-0 left-0">
        <h2 class="text-xl font-bold mb-4">Pemrograman Web</h2>
        <ul class="space-y-2">
          <li><a href="1.pendahuluan.html" class="text-gray-300 hover:text-white"><p class="text-sm font-bold">Pendahuluan</p></a></li>
          <li><a href="2.syntax-dasar.html" class="text-gray-300 hover:text-white"><p class="text-sm font-bold">Pengenalan Syntax</p></a></li>
          <li><a href="a.2.struktur-dasar.html" class="text-gray-300 hover:text-white"><p class="text-xs ml-4">| Struktur Dasar</p></a></li>

          <div class="flex-1 h-0.5 bg-gray-300"></div>

          <li><p href="#" class="text-gray-300 hover:text-white"><p class="text-sm font-bold">Kelompok 1</p></p></li>
          <li><a href="dokumentasi-kel1.html" class="text-gray-300 hover:text-white"><p class="text-xs ml-4">| Dokumentasi</p></a></li>
          <li><a href="a.2.struktur-dasar.html" class="text-gray-300 hover:text-white"><p class="text-xs ml-4">| Project akhir</p></a></li>

          <div class="flex-1 h-0.5 bg-gray-300"></div>

          <li><p href="#" class="text-gray-300 hover:text-white"><p class="text-sm font-bold">Kelompok 2</p></p></li>
          <li><a href="dokumentasi-kel2.html" class="text-gray-300 hover:text-white"><p class="text-xs ml-4">| Dokumentasi</p></a></li>
          <li><a href="a.2.struktur-dasar.html" class="text-gray-300 hover:text-white"><p class="text-xs ml-4">| Project akhir</p></a></li>

          <div class="flex-1 h-0.5 bg-gray-300"></div>
          
          <li><p href="#" class="text-gray-300 hover:text-white"><p class="text-sm font-bold">Kelompok 3</p></p></li>
          <li><a href="dokumentasi-kel3.html" class="text-gray-300 hover:text-white"><p class="text-xs ml-4">| Dokumentasi</p></a></li>
          <li><a href="a.2.struktur-dasar.html" class="text-gray-300 hover:text-white"><p class="text-xs ml-4">| Project akhir</p></a></li>
        </ul>
      </aside>
    `;
  
    // Sisipkan sidebar ke dalam body
    document.body.insertAdjacentHTML('afterbegin', sidebar);
  });
  