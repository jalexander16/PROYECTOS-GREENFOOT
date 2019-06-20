function cargarInicio(){
  var title = document.getElementById("subtitulo");
  title.innerHTML = "Principal";
  var conten = document.getElementById("contenido");
  conten.innerHTML = 'En esta página podras encontrar todo lo referente a los Video Juegos creados en la plataforma <a href="https://www.greenfoot.org/door" class="greenfoot" target="_blank">Greenfoot</a>. Los proyectos que realizamos en nuestra formacion como Ingenieros de Sistemas de la materia <strong>Electiva Profesional III.</strong></p>';
}

function cargarProyectos(){
  var title = document.getElementById("subtitulo");
  title.innerHTML = "Proyectos";
  var conten = document.getElementById("contenido");
  conten.innerHTML = '<p>En este espacio Puede observar los proyectos que se han realizado con  greenfoot.</p>'
      +'<ul class="list-proyect">'
        +'<li>Naves Espaciales</li>'
        +'<li>Tom El Granjero</li>'
        +'<li>Aprenda Las vocales</li>'
      +'</ul>';
}

function cargarContacto(){
  var title = document.getElementById("subtitulo");
  title.innerHTML = "Contactenos";
  var conten = document.getElementById("contenido");
  conten.innerHTML = '<p>Para mayor Informacion Con respecto a la plataforma y los Proyectos        Realizados siganos en nuestras redes sociales o nuestros numeros de Contacto</p>'
  +'<address>'
      +'<p style="text-align: center">Angel Guerrero <br> tel: 3164862486</p>'
      +'<p style="text-align: center">Angel Guerrero <br> tel: 3164862486</p>'
      +'<p style="text-align: center">Mauricio Peña  <br> tel: 3164862486</p>'
      +'<p style="text-align: center">Jhon Grisales  <br> tel: 3164862486</p>'
  +'</address>';
}
