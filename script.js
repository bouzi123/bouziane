// تبديل بين الوضع الفاتح والداكن
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// حركة انيميشن عند التمرير
window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal').forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 100) {
      section.classList.add('active');
    }
  });
});

// رسالة ترحيب عند الضغط على زر "ابدأ رحلتك معنا"
function sayHello() {
  alert('مرحباً بك في منصة شامو! سجّل الآن وابدأ رحلتك التعليمية 🚀');
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.admin-dashboard button').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('تم تنفيذ الإجراء: ' + btn.textContent);
    });
  });
});
import { neon } from '@netlify/neon';

const sql = neon(); // يستعمل NETLIFY_DATABASE_URL تلقائيًا

export async function handler(event, context) {
    const posts = await sql`SELECT * FROM posts`;
    return {
        statusCode: 200,
        body: JSON.stringify(posts),
    };
}
