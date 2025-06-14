// 星空アニメーション
function initStarBackground() {
    let scene, camera, renderer, stars = [];
    
    function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 1;
        camera.rotation.x = Math.PI / 6;
        
        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.domElement.style.position = 'fixed';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        renderer.domElement.style.zIndex = '-1';
        renderer.domElement.style.pointerEvents = 'none';
        document.body.appendChild(renderer.domElement);
        
        // 星を作成
        for (let i = 0; i < 1000; i++) {
            let star = new THREE.Vector3(
                Math.random() * 600 - 300,
                Math.random() * 600 - 300,
                Math.random() * 600 - 300
            );
            star.velocity = 0;
            star.acceleration = 0.02;
            stars.push(star);
        }
        
        let geometry = new THREE.BufferGeometry();
        let positions = new Float32Array(stars.length * 3);
        
        for (let i = 0; i < stars.length; i++) {
            positions[i * 3] = stars[i].x;
            positions[i * 3 + 1] = stars[i].y;
            positions[i * 3 + 2] = stars[i].z;
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        let material = new THREE.PointsMaterial({ color: 0xffffff, size: 2 });
        let starField = new THREE.Points(geometry, material);
        scene.add(starField);
        
        animate();
    }
    
    function animate() {
        requestAnimationFrame(animate);
        
        // 星を動かす
        for (let i = 0; i < stars.length; i++) {
            stars[i].velocity += stars[i].acceleration;
            stars[i].z += stars[i].velocity;
            
            if (stars[i].z >= 200) {
                stars[i].z = -200;
                stars[i].velocity = 0;
            }
        }
        
        let positions = renderer.domElement.querySelector('canvas').geometry?.attributes.position.array;
        if (positions) {
            for (let i = 0; i < stars.length; i++) {
                positions[i * 3] = stars[i].x;
                positions[i * 3 + 1] = stars[i].y;
                positions[i * 3 + 2] = stars[i].z;
            }
        }
        
        renderer.render(scene, camera);
    }
    
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    init();
}

// ページ読み込み後に実行
document.addEventListener('DOMContentLoaded', initStarBackground);
