class PuzzleGallery {
    constructor(container) {
        this.container = document.querySelector(container); // Corrected 'querySelector'
        if (this.container) {
            this.resizeImages();
            window.addEventListener('resize', () => this.resizeImages());
        }
    }

    resizeImages() {
        const items = this.container.querySelectorAll('li');
        items.forEach(item => {
            const img = item.querySelector('img');
            if (img.complete) {
                this.applySizingClasses(img, item);
            } else {
                img.onload = () => this.applySizingClasses(img, item);
            }
        });
    }

    applySizingClasses(img, item) {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        console.log(`Aspect Ratio: ${aspectRatio}`, img.src);
        
        item.classList.remove('wide', 'tall', 'normal'); // Ensures previous classes are removed

        if (aspectRatio > 1.5) {
            item.classList.add('wide');
            console.log(`Applied "wide" class to ${img.src}`);
        } 
        else {
            item.classList.add('normal');
            console.log(`Applied "normal" class to ${img.src}`);
        }
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = PuzzleGallery;
}

// Usage example
document.addEventListener('DOMContentLoaded', () => {
    new PuzzleGallery('.gallery');
});
