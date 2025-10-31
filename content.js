// สร้างองค์ประกอบ <style> ใหม่
const style = document.createElement('style');

// กำหนด CSS ที่จะลบล้าง grayscale
// ใช้ !important เพื่อให้แน่ใจว่ามันจะลบล้างสไตล์ของเว็บไซต์
style.textContent = `
    /* ลบล้าง grayscale บน element หลักๆ */
    html, body, :root {
        filter: none !important;
        -webkit-filter: none !important; /* สำหรับรองรับ browser เก่าๆ */
    }

    /* ลบล้าง grayscale บน element อื่นๆ ที่อาจถูกตั้งค่าด้วย (เช่น div, img) */
    * {
        filter: none !important;
        -webkit-filter: none !important;
    }
`;

// ฉีด <style> เข้าไปในส่วน <head> ของหน้าเว็บ
document.documentElement.appendChild(style);