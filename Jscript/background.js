document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.getElementById('starfield');
    const starCount = 150; 

    for (let i = 0; i < starCount; i++) {
        createStar();
    }

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        const size = Math.random() * 3;
        
        const duration = Math.random() * 3 + 2; 

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.animationDuration = `${duration}s`;
        
        star.style.animationDelay = `${Math.random() * 5}s`;

        starContainer.appendChild(star);
    }
});
