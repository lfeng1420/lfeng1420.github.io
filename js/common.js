// ========== 深色模式切换 ==========
(function() {
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
            document.body.classList.add('dark');
        }

        toggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark');
            localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
        });
    }
})();

// ========== 自动识别截图比例 ==========
function initScreenshotAutoType() {
    const screenshots = document.querySelectorAll('.single-screenshot, .detail-screenshot-img');
    screenshots.forEach(img => {
        if (img.complete) {
            setImgType(img);
        } else {
            img.addEventListener('load', function() { setImgType(this); });
        }
    });
}

function setImgType(img) {
    const naturalW = img.naturalWidth;
    const naturalH = img.naturalHeight;
    if (naturalW && naturalH) {
        const ratio = naturalW / naturalH;
        img.setAttribute('data-type', ratio < 0.7 ? 'portrait' : 'landscape');
    }
}

// 页面加载完成后执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScreenshotAutoType);
} else {
    initScreenshotAutoType();
}