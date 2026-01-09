window.addEventListener('scroll', () => {
    const scrollVal = window.scrollY;
    const heroUI = document.getElementById('hero-ui');
    if (scrollVal < 1000) {
        let opacity = 1 - (scrollVal / 800);
        if(heroUI) {
            heroUI.style.opacity = opacity < 0 ? 0 : opacity;
            heroUI.style.display = opacity <= 0 ? "none" : "flex";
        }
    }
});

function initParticles() {
    const container = document.getElementById('particle-container');
    if(!container) return;
    setInterval(() => {
        const p = document.createElement('div');
        p.className = 'particle';
        const isFire = Math.random() > 0.5;
        const color = isFire ? '#ff4500' : '#00d4ff';
        const size = Math.random() * 5 + 2 + 'px';
        p.style.width = size; p.style.height = size;
        const side = Math.random() > 0.5 ? (Math.random() * 20) : (80 + Math.random() * 20);
        p.style.left = side + '%';
        p.style.top = '-5%';
        p.style.backgroundColor = color;
        p.style.boxShadow = `0 0 12px ${color}`;
        p.style.animationDuration = Math.random() * 5 + 5 + 's';
        container.appendChild(p);
        setTimeout(() => p.remove(), 10000);
    }, 100);
}
window.addEventListener('load', initParticles);