// script.js
const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    const isDarkMode = htmlElement.classList.toggle('dark');
    localStorage.setItem('dark-mode', isDarkMode);
  };
  
  // Khi tải trang, áp dụng chế độ đã lưu
  const savedDarkMode = localStorage.getItem('dark-mode') === 'true';
  if (savedDarkMode) {
    document.documentElement.classList.add('dark');
  }
  
  document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
  