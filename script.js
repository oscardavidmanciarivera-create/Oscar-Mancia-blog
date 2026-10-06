//CONTROLADOR JAVASCRIPT ( MENÚ RESPONSIVO INTERACTIVO ).
        const menu = document.querySelector('#mobile-menu');
        const menuLinks = document.querySelector('.nav-menu');

        // Al dar clic en las tres rayitas, activa o desactiva la clase "active"
        menu.addEventListener('click', function() {
            menu.classList.toggle('active');
            menuLinks.classList.toggle('active');
        });

        // Cierra el menú automáticamente cuando el reclutador da clic en cualquier enlace
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                menuLinks.classList.remove('active');
            });
        });

// Desactivar clic derecho en todo el documento
document.addEventListener('contextmenu', event => event.preventDefault());

// O, para ser menos intrusivo, solo desactivarlo en las imágenes de la clase 'nav-logo-img'
const logoImages = document.querySelectorAll('.nav-logo-img');
logoImages.forEach(img => {
    img.addEventListener('contextmenu', event => event.preventDefault());
});

        

        