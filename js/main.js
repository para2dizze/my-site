let currentLang = 'ka';

function changeLanguage(lang) {
  currentLang = lang;
  document.getElementById('current-lang').innerText = `🌐 ${lang.toUpperCase()}`;
  
  // Обновление статических текстов
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      element.innerText = i18n[lang][key];
    }
  });

  renderSystems();
}

function renderSystems() {
  const container = document.getElementById('systems-container');
  if (!container) return;
  
  container.innerHTML = systemsData.map(sys => `
    <div class="card">
      <span class="card-sys-id">${sys.id}</span>
      <h3 class="card-title">${sys.title[currentLang] || sys.title['en']}</h3>
      <p class="card-desc">${sys.desc}</p>
    </div>
  `).join('');
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
  renderSystems();
});