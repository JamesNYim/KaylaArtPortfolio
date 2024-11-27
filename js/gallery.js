class PuzzleGallery {
    constructor(container) {
        this.container = document.querySelector(container); // Corrected 'querySelector'
        if (this.container) {
            this.resizeImages();
            this.setupModal();
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

    setupModal() {
        const modal = document.getElementById("imageModal");
        const modalImage = document.getElementById("modalImage");
        const closeBtn = modal.querySelector(".close");

        // Add click event to all gallery images
        this.container.querySelectorAll("img").forEach(img => {
            img.addEventListener("click", () => {
                console.log("Clicked an image: ", img.src);
                modal.style.display = "flex";
                modalImage.src = img.src;
            });
        });

        // Close modal when clicking the close button
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Close modal when clicking outside the image
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = PuzzleGallery;
}

// Usage example
document.addEventListener('DOMContentLoaded', () => {
    new PuzzleGallery('.gallery');
});
