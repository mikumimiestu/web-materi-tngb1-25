document.addEventListener('DOMContentLoaded', () => {
    const sidebar = `
      <aside class="w-64 bg-gray-800 h-screen p-4 fixed top-0 left-0">
        <h2 class="text-xl font-bold mb-4">Pemrograman Web</h2>
        <ul class="space-y-2">
          <li><a href="1.pendahuluan.html" class="text-gray-300 hover:text-white"><p class="text-sm font-bold">Pendahuluan</p></a></li>
          <li><a href="2.syntax-dasar.html" class="text-gray-300 hover:text-white"><p class="text-sm font-bold">Pengenalan Syntax</p></a></li>
          <li><a href="a.2.struktur-dasar.html" class="text-gray-300 hover:text-white"><p class="text-xs ml-4">| Struktur Dasar</p></a></li>
          <li><a href="3.syntax-dasar.html" class="text-gray-300 hover:text-white"><p class="text-sm font-bold">...</p></a></li>
        </ul>
      </aside>
    `;
  
    // Sisipkan sidebar ke dalam body
    document.body.insertAdjacentHTML('afterbegin', sidebar);
  });
  