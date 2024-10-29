class PuzzleGallery {
    constructor(container) {
        this.container = document.quertSelector(container);
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
            }
            else {
                img.onload = () => this.applySizingClasses(img, item);
            }
        });
    }

    applySizingClasses(img, item) {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        item.classList.remove('width', 'tall', 'normal');
        
        if (aspectRatio > 1.5) {
            item.classList.add('wide');
        } 
        else if (aspectRatio < 0.75) {
            item.classList.add('tall');
        } 
        else {
            item.classList.add('normal');
        }
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = PuzzleGallery;
}
