// Burbujas
document.addEventListener('DOMContentLoaded', function() {
const pecera = document.querySelector('.pecera');
let burbuja;

function crearBurbuja() {
    burbuja = document.createElement('div');
    burbuja.classList.add('burbuja');
    //crear burbuja
    const tamaño = Math.random() * 10 + 5;
    // tamaño aleatorio de la burbuja
    burbuja.style.width = `${tamaño}px`;
    burbuja.style.height = `${tamaño}px`;
    burbuja.style.opacity = Math.random()*0.5+0.8;
    // posicion aleatoria horizontal
    const posX = Math.random() * (pecera.offsetWidth - tamaño);
    burbuja.style.left = `${posX}px`;
    //posicion inicial arriba del suelo
    burbuja.style.bottom = '30px';
    //duracion de la animacion
    const duracion = Math.random() * 3 + 3;
    burbuja.style.animationDuration = `${duracion}s`;
    //oscilacion horizontal
    const oscilacion = Math.random() * 10 - 5;
    burbuja.style.setProperty('--oscilacion', `${oscilacion}px`);
    //añadir burbuja a la pecera
    pecera.appendChild(burbuja);
    //eliminar la burbuja al terminar la animacion
    setTimeout(() => {
        burbuja.remove();
    }, duracion * 1000)
    //crear burbujas cada 30 seg
    setInterval(crearBurbuja,300);
    //crear algunas burbujas iniciales
    for (let i = 0; i<10; i++) {
        setTimeout(crearBurbuja, i*100);
    }
    burbuja.style.animationName = 'subir';
    burbuja.style.animationTimingFunction = 'cubic-bezier(0, 0, 1,1)';
}
crearBurbuja();
})

// Pez

class Pez {
    constructor(x,y) {
        this.element = document.createElement('div');
        this.element.className = 'pez';
        this.size = 40 + Math.random() * 30;
        this.x = x;
        this.y = y;
        this.velX = (Math.random() - 0.5) * 2;
        this.velY = (Math.random() - 0.5) * 2;
        this.lifetime = 3000 + Math.random() * 2000;

        this.init();
    }
    init() {
        this.element.style.left = `${this.x - this.size/2}px`;
        this.element.style.top = `${this.y - this.size/2}px`;

        if(!this.element.querySelector('.ojo')) {
            const ojo = document.createElement('div');
            ojo.className = 'ojo';
            this.element.appendChild(ojo);
        }

        if(!this.element.querySelector('.cola')) {
            const cola = document.createElement('div');
            cola.className = 'cola';
            this.element.appendChild(cola);
        }

        document.querySelector('.pecera').appendChild(this.element);
        this.move();
        this.startLifeTime();
    }
    move() {
        this.x += this.velX;
        this.y += this.velY;
        const pecera = document.querySelector('.pecera');
        const peceraWidth = 600;
        const peceraHeight = 450;
        const suelopecera = 30;
        const peceraRect = pecera.getBoundingClientRect();
        //rebote
        if (this.x <= this.size/2) {
            this.velX = Math.abs(this.velX);
            this.x = this.size/2;
            this.element.style.transform = 'scaleX(1)'
        }
        else if(this.x >= peceraWidth - this.size/2) {
            this.velX = -Math.abs(this.velX);
            this.x = peceraWidth - this.size/2;
            this.element.style.transform = `scaleX(-1)`
        }
    
        if (this.y <= this.size/2) {
            this.velY = Math.abs(this.velY);
            this.y = this.size/2;
        }
        else if(this.y >= peceraHeight - this.size/2 - suelopecera) {
            this.velY = -Math.abs(this.velY);
            this.y = peceraHeight - this.size/2 - suelopecera;
        }

        this.element.style.left = `${this.x - this.size/2}px`;
        this.element.style.top = `${this.y - this.size/2}px`;

        this.animationId = requestAnimationFrame(()  => this.move());
    }
    startLifeTime() {
        setTimeout(() => {
            this.element.style.transition = 'opacity 1s';
            this.element.style.opacity = '0';

            setTimeout(() => {
                cancelAnimationFrame(this.animationId);
                this.element.remove();
            }, 1000);
        }, this.lifetime);
    }
}
document.querySelector('.pecera').addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    new Pez(x,y);
})

// Algas

function crearAlgas() {
    const pecera = document.querySelector('.pecera');
    
    // Crear 10 algas
    for (let i = 0; i < 10; i++) {
        const alga = document.createElement('div');
        alga.className = 'alga';
        
        // Posición horizontal aleatoria
        alga.style.left = `${Math.random() * 600}px`;
        
        // Altura aleatoria (50px a 200px)
        alga.style.height = `${50 + Math.random() * 150}px`;
        
        // Añadir a la pecera
        pecera.appendChild(alga);
    }
}

function crearAlga() {
    const contenedorAlgas = document.querySelector('.algas-container');
    const peceraAncho = document.querySelector('.pecera').offsetWidth;

    const cantidadAlgas = 10;

    for (let i = 0; i < cantidadAlgas; i++) {
        const alga = document.createElement('div');
        alga.className = 'alga'

        const posicionX = Math.random() * peceraAncho;
        alga.style.left = `${posicionX}px`;

        const altura = 50 + Math.random() * 150;
        alga.style.height = `${altura}px`;

        alga.style.width = `${5 + Math.random()*6}px`

        const duracionAnimacion = 2 + Math.random() *3;
        alga.style.animationDuration = `${duracionAnimacion}s`;
        alga.style.opacity = 0.7 + Math.random() * 0.3;
        contenedorAlgas.appendChild(alga);
    }
};
window.onload = crearAlgas;
