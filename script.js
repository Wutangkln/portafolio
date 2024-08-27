let menuVisible = false;

document.querySelector('.nav-responsive').addEventListener('click', mostrarOcultarMenu);

function mostrarOcultarMenu(){
    const nav = document.getElementById('nav');
    if(menuVisible){
        nav.classList.remove('responsive');
        menuVisible = false;
    }else{
        nav.classList.add('responsive');
        menuVisible = true;
    }
}

document.querySelectorAll('#nav a').forEach(item => {
    item.addEventListener('click', seleccionar);
});

function seleccionar() {
    document.getElementById('nav').classList.remove('responsive');
    menuVisible = false;
}

document.addEventListener("DOMContentLoaded", function() {
    const proyectos = document.querySelectorAll(".proyecto");

    proyectos.forEach(proyecto => {
        proyecto.addEventListener("click", function() {
            const url = this.getAttribute("data-url");
            window.open(url, "_blank");
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    const successMessage = document.getElementById('successMessage');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        successMessage.style.display = 'block';

        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000); 
    });
});
