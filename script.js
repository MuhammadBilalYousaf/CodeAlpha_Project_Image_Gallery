// Select the file input and gallery container
const fileInput = document.getElementById('file-input');
const uploadedGallery = document.getElementById('uploaded-gallery');

fileInput.addEventListener('change', function(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            imgElement.alt = file.name;
            imgElement.classList.add('uploaded-image');
            uploadedGallery.appendChild(imgElement);
        };

        reader.readAsDataURL(file);
    }
});


