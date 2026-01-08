window.addEventListener('scroll', () => {
    const scrollVal = window.scrollY;
    const heroUI = document.getElementById('hero-ui');
    const egg = document.getElementById('main-egg');

    if (scrollVal < 1400) {
        let zoom = 1 + (scrollVal * 0.0002);
        if(egg) {
            egg.style.transform = `scale(${zoom})`;
        }
        let opacity = 1 - (scrollVal / 800);
        if(heroUI) {
            heroUI.style.opacity = opacity < 0 ? 0 : opacity;
            heroUI.style.display = opacity <= 0 ? "none" : "flex";
        }
    } else {
        if(heroUI) heroUI.style.display = "none";
    }
});