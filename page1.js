
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const form = document.getElementById('contact-form');
    form.style.transition = 'opacity 0.5s ease-out';
    form.style.opacity = '0';

    setTimeout(() => {
       
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Thank you! Your message has been successfully sent.';
        successMessage.style.color = '#4caf50';
        successMessage.style.fontWeight = 'bold';
        successMessage.style.textAlign = 'center';
        successMessage.style.marginTop = '1rem';

        form.parentNode.replaceChild(successMessage, form);
    }, 800);
});


function zoomImage(image) {
    const src = image.src;

  
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';

   
    const zoomedImage = document.createElement('img');
    zoomedImage.src = src;
    zoomedImage.style.maxWidth = '90%';
    zoomedImage.style.maxHeight = '90%';
    zoomedImage.style.borderRadius = '10px';
    zoomedImage.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)';
    zoomedImage.style.cursor = 'pointer';
    zoomedImage.alt = 'Zoomed Image';


    overlay.appendChild(zoomedImage);

    
    overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });


    document.body.appendChild(overlay);
}
