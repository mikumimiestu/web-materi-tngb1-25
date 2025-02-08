async function loadData() {
    try {
      const response = await fetch('../json/2.syntax-dasar.json');
      const data = await response.json();

      const container = document.getElementById('code-container');

      data.forEach(item => {
        const codeBox = document.createElement('div');
        codeBox.classList.add('p-4', 'bg-gray-800', 'rounded-lg', 'shadow-md');

        codeBox.innerHTML = `
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm px-3 py-1">${item.format}</span>
            <button 
              class="text-sm text-gray-800 bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
              onclick="copyCode('${item.code.replace(/'/g, "\\'")}')"
            >
              Copy
            </button>
          </div>
          <pre class="overflow-x-auto p-4 bg-gray-900 rounded text-sm">
<code>${item.code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code>
          </pre>
          <p class="mt-2 text-sm text-gray-300">${item.explanation}</p>
        `;

        container.appendChild(codeBox);
      });
    } catch (error) {
      console.error('Failed to load data:', error);
    }
  }

  function copyCode(code) {
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy code: ', err);
    });
  }

  window.onload = loadData;