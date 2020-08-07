
  window.addEventListener('scroll', function(){
    let animacion = document.getElementsByName('#animation');
    let posicionObj = animacion.getBoundingClientRect().top;
    let sizeScreen = window.innerHeight/2;

    if(posicionObj < sizeScreen){
      animacion.style.animation = 'mover 1s ease-out';
    }
    


  })

  let button = document.getElementById("nav-icon1");
  let menu = document.querySelector(".nav_menu");
  
  // social icons hover
  
  const triggers = document.querySelectorAll('.fab')
  const allMenu = document.querySelectorAll('.menu_item')
  const socialMenu = document.querySelectorAll('.nav_social') 
  
  function handleEnter() {
      this.classList.add('trigger-enter');
      setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 200);
      }
      
      function handleLeave() {
        this.classList.remove('trigger-enter', 'trigger-enter-active');
      }
  
  triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
  triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
    
  button.addEventListener("click", function(){
  
  
  
      this.classList.toggle("open")
      menu.classList.toggle("open_menu")
  
  
      allMenu.forEach((element, i) => {
          setTimeout(() => {
              element.classList.toggle("anotherclass");
          }, i * 200);
        });
    });


    function debounce(func, wait = 20, immediate = true) {
     var timeout;
     return function() {
       var context = this, args = arguments;
       var later = function() {
         timeout = null;
         if (!immediate) func.apply(context, args);
       };
       var callNow = immediate && !timeout;
       clearTimeout(timeout);
       timeout = setTimeout(later, wait);
       if (callNow) func.apply(context, args);
     };
   };
   

   /*
    *Typescript
    */

const typed = new Typed('.typed', {
  strings: ['<i class="habilidades">web developer</i>',
            '<i class="habilidades">web designer</i>', 
            '<i class="habilidades">systems analyst</i>',
            '<i class="habilidades">SEO specialist</i>',
            '<i class="habilidades">systems engineer</i>'],

            stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	          typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	          startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	          backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	          smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	          shuffle: false, // Alterar el orden en el que escribe las palabras.
	          backDelay: 2000, // Tiempo de espera despues de que termina de escribir una palabra.
	          loop: true, // Repetir el array de strings
	          loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	          showCursor: true, // Mostrar cursor palpitanto
	          cursorChar: '|', // Caracter para el cursor
	          contentType: 'html', // 'html' o 'null' para texto sin formato
})
