document.getElementById('contactForm').addEventListener('submit', function(event) {
    var isValid = true;
    var inputs = document.querySelectorAll('#contactForm input[required], #contactForm select[required]');

    inputs.forEach(function(input) {
        if (!input.value) {
            isValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '';
        }
    });

    if (!isValid) {
        event.preventDefault();
        alert('Por favor, complete todos los campos obligatorios.');
    }
});
