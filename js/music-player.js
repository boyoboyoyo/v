// Music player initialization
function initMusicPlayer() {
    // APlayer configuration
    if (typeof APlayer !== 'undefined') {
        const ap = new APlayer({
            container: document.getElementById('player'),
            fixed: true,
            autoplay: false,
            theme: '#2D8CF0',
            loop: 'all',
            order: 'random',
            preload: 'auto',
            volume: 0.7,
            mutex: true,
            listFolded: true,
            listMaxHeight: 90,
            audio: [
                {
                    name: 'Senbonzakura',
                    artist: 'Hatsune Miku',
                    url: 'https://example.com/senbonzakura.mp3', // Change to actual music file URL
                    cover: 'https://blog.imikufans.com/wp-content/uploads/2023/08/btn_miku1.jpg'
                },
                {
                    name: 'World is Mine',
                    artist: 'Hatsune Miku',
                    url: 'https://example.com/worldismine.mp3', // Change to actual music file URL
                    cover: 'https://blog.imikufans.com/wp-content/uploads/2023/08/btn_miku1.jpg'
                }
            ]
        });

        // Player events
        ap.on('play', function () {
            console.log('Music playback started');
        });

        ap.on('pause', function () {
            console.log('Music paused');
        });
    }
}

// Execute after page load
document.addEventListener('DOMContentLoaded', function() {
    // Wait for APlayer to load
    if (typeof APlayer !== 'undefined') {
        initMusicPlayer();
    } else {
        // Wait for APlayer to load
        const checkAPlayer = setInterval(() => {
            if (typeof APlayer !== 'undefined') {
                clearInterval(checkAPlayer);
                initMusicPlayer();
            }
        }, 100);
    }
});
