// Custom JavaScript for K-pop Universe
document.addEventListener('DOMContentLoaded', () => {
    const discoverBtn = document.getElementById('discover-btn');
    
    // Button to discover new K-pop artists
    discoverBtn.addEventListener('click', () => {
        alert('Discover new and upcoming K-pop artists right here!');
    });

    // Add event listeners to group cards
    document.querySelectorAll('.group-card a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = link.getAttribute('href');
            window.location.href = targetUrl;
        });
    });

    console.log("K-pop Universe is ready!");
});

// Add functionality for more interactive elements if needed
console.log('K-pop Universe website loaded');
// Custom JavaScript for K-pop Universe
document.addEventListener('DOMContentLoaded', () => {
    const discoverBtn = document.getElementById('discover-btn');
    
    // Button to discover new K-pop artists
    discoverBtn.addEventListener('click', () => {
        alert('Discover new and upcoming K-pop artists right here!');
    });

    // Add event listeners to group cards
    document.querySelectorAll('.group-card a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = link.getAttribute('href');
            window.location.href = targetUrl;
        });
    });

    // Add click event to carousel items
    document.querySelectorAll('.carousel-item').forEach(item => {
        item.addEventListener('click', () => {
            const targetUrl = item.getAttribute('data-url');
            window.location.href = targetUrl;
        });
    });

    console.log("K-pop Universe is ready!");
});

// Add functionality for more interactive elements if needed
console.log('K-pop Universe website loaded');
// Detecta clic en un ítem del carrusel
document.querySelectorAll('#groupCarousel .carousel-item').forEach(item => {
    item.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    });
});
document.querySelectorAll('.leer-mas-btn').forEach(button => {
    button.addEventListener('click', function() {
        const title = this.getAttribute('data-title');
        const content = this.getAttribute('data-content');
        document.getElementById('noticiaModalLabel').innerText = title;
        document.getElementById('noticiaModalBody').innerText = content;
    });
});

document.querySelectorAll('.ver-canciones-btn').forEach(button => {
    button.addEventListener('click', function() {
        const grupo = this.getAttribute('data-grupo');
        const cancion1 = this.getAttribute('data-cancion1');
        const imagen1 = this.getAttribute('data-imagen1');
        const cancion2 = this.getAttribute('data-cancion2');
        const imagen2 = this.getAttribute('data-imagen2');
        const cancion3 = this.getAttribute('data-cancion3');
        const imagen3 = this.getAttribute('data-imagen3');

        // Actualiza el título del modal
        document.getElementById('cancionesModalLabel').innerText = `Top 3 Canciones de ${grupo}`;

        // Actualiza las imágenes y los nombres de las canciones
        document.getElementById('imagen1').src = imagen1;
        document.getElementById('cancion1').innerText = cancion1;

        document.getElementById('imagen2').src = imagen2;
        document.getElementById('cancion2').innerText = cancion2;

        document.getElementById('imagen3').src = imagen3;
        document.getElementById('cancion3').innerText = cancion3;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // General function for handling video and image change
    function handleSongSelection(selectId, videoId, videoSourceId, imageId, imageSources) {
        const songSelect = document.getElementById(selectId);
        const songVideo = document.getElementById(videoId);
        const videoSource = document.getElementById(videoSourceId);
        const image = document.getElementById(imageId);

        songSelect.addEventListener('change', () => {
            const selectedIndex = songSelect.selectedIndex;
            const selectedVideoSrc = songSelect.value;
            const selectedImageSrc = imageSources[selectedIndex];

            videoSource.src = selectedVideoSrc;
            image.src = selectedImageSrc;
            songVideo.load();  // Load the new video source
        });
    }

    // Apply to each member's modal
    handleSongSelection('minjiSongSelect', 'minjiSongVideo', 'minjiVideoSource', 'minjiImage', [
        'imagenes/minji_attention.jpg',
        'imagenes/minji_hypeboy.jpg',
        'imagenes/minji_cookie.jpg'
    ]);
    handleSongSelection('hanniSongSelect', 'hanniSongVideo', 'hanniVideoSource', 'hanniImage', [
        'imagenes/hanni_attention.jpg',
        'imagenes/hanni_hypeboy.jpg',
        'imagenes/hanni_cookie.jpg'
    ]);
    handleSongSelection('danielleSongSelect', 'danielleSongVideo', 'danielleVideoSource', 'danielleImage', [
        'imagenes/danielle_attention.jpg',
        'imagenes/danielle_hypeboy.jpg',
        'imagenes/danielle_cookie.jpg'
    ]);
    handleSongSelection('haerinSongSelect', 'haerinSongVideo', 'haerinVideoSource', 'haerinImage', [
        'imagenes/haerin_attention.jpg',
        'imagenes/haerin_hypeboy.jpg',
        'imagenes/haerin_cookie.jpg'
    ]);
    handleSongSelection('hyeinSongSelect', 'hyeinSongVideo', 'hyeinVideoSource', 'hyeinImage', [
        'imagenes/hyein_attention.jpg',
        'imagenes/hyein_hypeboy.jpg',
        'imagenes/hyein_cookie.jpg'
    ]);
});

document.querySelectorAll('.ver-canciones-btn').forEach(button => {
    button.addEventListener('click', function() {
        const grupo = this.getAttribute('data-grupo');
        const cancion1 = this.getAttribute('data-cancion1');
        const imagen1 = this.getAttribute('data-imagen1');
        const cancion2 = this.getAttribute('data-cancion2');
        const imagen2 = this.getAttribute('data-imagen2');
        const cancion3 = this.getAttribute('data-cancion3');
        const imagen3 = this.getAttribute('data-imagen3');

        const modalTitle = document.querySelector('#cancionesModalLabel');
        const modalBody = document.querySelector('.modal-body');

        modalTitle.textContent = `Top Canciones de ${grupo}`;
        modalBody.innerHTML = `
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">
                    <img src="${imagen1}" alt="${cancion1}" class="img-thumbnail me-2" style="max-height: 100px;">
                    ${cancion1}
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <img src="${imagen2}" alt="${cancion2}" class="img-thumbnail me-2" style="max-height: 100px;">
                    ${cancion2}
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <img src="${imagen3}" alt="${cancion3}" class="img-thumbnail me-2" style="max-height: 100px;">
                    ${cancion3}
                </a>
            </div>
        `;
    });
});