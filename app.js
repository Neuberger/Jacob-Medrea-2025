let currentIndex = 0; // Index des aktuellen Videos
const videos = document.querySelectorAll('.video-item'); // Alle Video-Elemente

// Funktion zum Wechseln des Videos
function changeVideo(direction) {
    // Entferne die "active"-Klasse vom aktuellen Video
    videos[currentIndex].classList.remove('active');

    // Berechne den neuen Index
    currentIndex += direction;

    // Wenn der Index über die Anzahl der Videos hinausgeht, gehe zurück zum ersten Video
    if (currentIndex < 0) {
        currentIndex = videos.length - 1;
    } else if (currentIndex >= videos.length) {
        currentIndex = 0;
    }

    // Füge die "active"-Klasse zum neuen Video hinzu
    videos[currentIndex].classList.add('active');
}

// Initiale Anzeige des ersten Videos
changeVideo(0);
