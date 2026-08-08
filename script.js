document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const tuNumero = "+524921924116"; 
    const nombre = document.getElementById('nombre').value;
    const mensaje = `Hola, me llamo ${encodeURIComponent(nombre)} y deseo más información sobre los lotes.`;

    window.open(`https://wa.me/${tuNumero}?text=${mensaje}`, '_blank');
    form.reset();
});