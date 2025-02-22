document.getElementById('interactive-button').addEventListener('click', function() {
    this.classList.add('bounce');
    setTimeout(() => {
        this.classList.remove('bounce');
    }, 1000);
});

document.getElementById('image-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            document.getElementById('image-container').innerHTML = '';
            document.getElementById('image-container').appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});