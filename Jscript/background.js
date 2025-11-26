document.addEventListener('DOMContentLoaded', () => {
    // Buscamos el contenedor donde irán las estrellas
    const starContainer = document.getElementById('starfield');
    const starCount = 150; // Cantidad de estrellas a generar

    // Bucle para crear cada estrella
    for (let i = 0; i < starCount; i++) {
        createStar();
    }

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');

        // Posición aleatoria (X, Y) en porcentajes de la pantalla
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Tamaño aleatorio para simular distancia (unas más lejos, otras más cerca)
        const size = Math.random() * 3;
        
        // Duración de la animación aleatoria (velocidad de viaje)
        // Entre 2 y 5 segundos
        const duration = Math.random() * 3 + 2; 

        // Aplicamos los estilos calculados
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Asignamos la duración de la animación definida en el CSS
        star.style.animationDuration = `${duration}s`;
        
        // Retraso aleatorio para que no aparezcan todas a la vez al cargar
        star.style.animationDelay = `${Math.random() * 5}s`;

        // Añadimos la estrella al fondo
        starContainer.appendChild(star);
    }
});
