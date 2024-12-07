// script.js
const images = document.querySelectorAll('.image');
let draggedImage = null;

images.forEach(image => {
    image.addEventListener('dragstart', () => {
        draggedImage = image;
        setTimeout(() => {
            image.style.display = 'none';
        }, 0);
    });

    image.addEventListener('dragend', () => {
        setTimeout(() => {
            draggedImage.style.display = 'block';
            draggedImage = null;
        }, 0);
    });

    image.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    image.addEventListener('dragenter', (e) => {
        e.preventDefault();
        image.classList.add('selected');
    });

    image.addEventListener('dragleave', () => {
        image.classList.remove('selected');
    });

    image.addEventListener('drop', () => {
        image.classList.remove('selected');
        if (draggedImage !== image) {
            let draggedBackground = draggedImage.style.backgroundImage;
            draggedImage.style.backgroundImage = image.style.backgroundImage;
            image.style.backgroundImage = draggedBackground;
        }
    });
});
