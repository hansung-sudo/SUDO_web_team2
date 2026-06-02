// 메인 화면 스크립트
// Supabase 연동 예정

// 다크 모드 토글
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// 저장된 설정 또는 시스템 설정으로 초기화
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  html.setAttribute('data-theme', 'dark');
}

themeToggle?.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// 햄버거 메뉴
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
});

// 스크롤 시 .fade-up 요소 표시 (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // 같은 부모 안 형제들은 순서대로 딜레이
      const siblings = entry.target.parentElement.querySelectorAll('.fade-up');
      let delay = 0;
      siblings.forEach((el, idx) => { if (el === entry.target) delay = idx * 80; });
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
