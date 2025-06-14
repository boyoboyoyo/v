// 音楽プレイヤーの初期化
function initMusicPlayer() {
    // APlayerの設定
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
                    url: 'https://example.com/senbonzakura.mp3', // 実際の音楽ファイルURLに変更
                    cover: 'https://blog.imikufans.com/wp-content/uploads/2023/08/btn_miku1.jpg'
                },
                {
                    name: 'World is Mine',
                    artist: 'Hatsune Miku',
                    url: 'https://example.com/worldismine.mp3', // 実際の音楽ファイルURLに変更
                    cover: 'https://blog.imikufans.com/wp-content/uploads/2023/08/btn_miku1.jpg'
                }
            ]
        });
        
        // プレイヤーイベント
        ap.on('play', function () {
            console.log('音楽再生開始');
        });
        
        ap.on('pause', function () {
            console.log('音楽一時停止');
        });
    }
}

// ページ読み込み後に実行
document.addEventListener('DOMContentLoaded', function() {
    // APlayerが読み込まれるまで待機
    if (typeof APlayer !== 'undefined') {
        initMusicPlayer();
    } else {
        // APlayerの読み込みを待つ
        const checkAPlayer = setInterval(() => {
            if (typeof APlayer !== 'undefined') {
                clearInterval(checkAPlayer);
                initMusicPlayer();
            }
        }, 100);
    }
});
