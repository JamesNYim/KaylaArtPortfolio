document.addEventListener('DOMContentLoaded', () => {
    const PuzzleGallery = window.PuzzleGallery || require('./photoGallery.js');
    new PuzzleGallery('#photo-gallery .gallery');
});
