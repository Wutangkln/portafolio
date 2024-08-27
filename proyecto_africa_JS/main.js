// Codigo hexadecimal -> 6 numeros, del 0 al 9, o una letra del A a la F

function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; // -> math.random genera entre 0 y 0.99
                                                          // -> por esto math.floor redondea para obtener u numero entre 0 a 16 (0-9, A-F)
    }
    return color;
}


document.querySelector('#changeColorButton').addEventListener('click', function() {
    const bgColor = document.querySelector('#textContainer'); 
    const colorText = document.querySelector('.box p');

    const newBgColor = randomColor();
    const newTextColor = randomColor();
    
    bgColor.style.backgroundColor = newBgColor;
    colorText.style.color = newTextColor;
});


document.querySelectorAll('.zoomable').forEach(function(img) {
    img.addEventListener('mouseenter', function() {
        img.style.transform = 'scale(1.5)';
    });

    img.addEventListener('mouseleave', function() {
        img.style.transform = 'scale(1)';
    });
});


document.querySelector('#message').addEventListener('mouseenter', function() {
    this.textContent = 'VAS MUY BIEN SIGUE ESTUDIANDO';
});

document.querySelector('#message').addEventListener('mouseleave', function() {
    this.textContent = 'Pasa el mouse por aquí para el mensaje.';
});
