// footer.js

function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
  
    footerContainer.innerHTML = `
      <div class="container mx-auto py-4 px-8 flex flex-col items-center">
        <span class="text-lg text-white font-bold">© ${new Date().getFullYear()} DevSphereAcademy</span>
        <span class="text-sm">by <a href="https://technovagroupinc.com" class="underline hover:text-gray-200">technovagroupinc.com</a></span>
      </div>
    `;
  }
  
  // Load footer dynamically
  document.addEventListener('DOMContentLoaded', loadFooter);
  