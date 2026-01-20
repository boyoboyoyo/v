// Swimming fish animation
function initSwimmingFish() {
    const fishContainer = document.createElement('div');
    fishContainer.className = 'fish-container';
    fishContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    document.body.appendChild(fishContainer);

    // Fish SVG
    const fishSVG = `
        <svg width="40" height="20" viewBox="0 0 40 20">
            <path d="M5,10 Q15,5 25,10 Q15,15 5,10 Z" fill="#4a9eff" opacity="0.6"/>
            <circle cx="20" cy="10" r="2" fill="#333"/>
            <path d="M0,8 L8,10 L0,12 Z" fill="#4a9eff" opacity="0.8"/>
        </svg>
    `;

    function createFish() {
        const fish = document.createElement('div');
        fish.className = 'swimming-fish';
        fish.innerHTML = fishSVG;

        // Random initial position and speed
        const startY = Math.random() * window.innerHeight;
        const speed = 1 + Math.random() * 2;
        const amplitude = 50 + Math.random() * 100;
        const frequency = 0.01 + Math.random() * 0.02;

        fish.style.cssText = `
            position: absolute;
            left: -50px;
            top: ${startY}px;
            transition: transform 0.1s ease;
        `;

        fishContainer.appendChild(fish);

        let x = -50;
        let time = 0;

        function moveFish() {
            if (x > window.innerWidth + 50) {
                fish.remove();
                return;
            }

            x += speed;
            time += frequency;
            const y = startY + Math.sin(time) * amplitude;

            fish.style.left = x + 'px';
            fish.style.top = y + 'px';

            requestAnimationFrame(moveFish);
        }

        moveFish();
    }

    // Periodically create fish
    setInterval(createFish, 3000 + Math.random() * 5000);
}

document.addEventListener('DOMContentLoaded', initSwimmingFish);
