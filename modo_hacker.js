/*document.addEventListener('DOMContentLoaded', (event) => {
    // Función para manejar la expansión de secciones
    function toggleExpandable(event) {
        if (event.target.tagName === 'H3') {
            const expandable = event.target.closest('.expandable');
            if (expandable) {
                expandable.classList.toggle('active');
            }
        }
    }

    // Agregar evento click a todo el documento
    document.addEventListener('click', toggleExpandable);

    // Efecto de "typing" para el título principal
    const title = document.querySelector('h1');
    const text = title.textContent;
    title.innerHTML = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();

    // Efecto de "hacking" en los enlaces de navegación
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', (event) => {
            const originalText = event.target.textContent;
            let hackedText = '';
            for (let i = 0; i < originalText.length; i++) {
                hackedText += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
            }
            event.target.textContent = hackedText;

            setTimeout(() => {
                event.target.textContent = originalText;
            }, 500);
        });
    });

    // Efecto de "matrix" en el fondo
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';

    const columns = canvas.width / 20;
    const drops = [];

    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff00';
        ctx.font = '15px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = String.fromCharCode(Math.floor(Math.random() * 128));
            ctx.fillText(text, i * 20, drops[i] * 20);

            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(draw, 33);

    // Añadir efecto de parpadeo a los elementos con clase 'blink'
    const blinkElements = document.querySelectorAll('.blink');
    blinkElements.forEach(element => {
        setInterval(() => {
            element.style.visibility = (element.style.visibility === 'hidden' ? 'visible' : 'hidden');
        }, 500);
    });
});

*/
document.addEventListener('DOMContentLoaded', () => {
    // Typing effect for the main title
    const title = document.querySelector('h1');
    const titleText = title.textContent;
    title.textContent = '';
    let i = 0;
  
    function typeWriter() {
      if (i < titleText.length) {
        title.textContent += titleText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
  
    typeWriter();
  
    // Expandable sections
    const expandables = document.querySelectorAll('.expandable');
    expandables.forEach(expandable => {
      const header = expandable.querySelector('h3');
      const content = expandable.querySelector('.expandable-content');
  
      header.addEventListener('click', () => {
        expandable.classList.toggle('expanded');
        if (expandable.classList.contains('expanded')) {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
    });
  
    // Matrix-like background effect
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
  
    const columns = canvas.width / 20;
    const drops = [];
  
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
  
    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      ctx.fillStyle = '#0f0';
      ctx.font = '15px monospace';
  
      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(Math.random() * 128);
        ctx.fillText(text, i * 20, drops[i] * 20);
  
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
  
        drops[i]++;
      }
    }
  
    setInterval(draw, 33);
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  });
  