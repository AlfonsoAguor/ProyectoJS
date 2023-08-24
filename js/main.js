$(document).ready(function(){

//Slider
  if(window.location.href.indexOf('index') > -1){
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200
    });
  }
//Posts
    if(window.location.href.indexOf('index') > -1){
    var posts = [
      {
        title: 'Prueba 1',
        date: moment().format("L"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        title: 'Prueba 2',
        date: moment().format("L"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        title: 'Prueba 3',
        date: moment().format("L"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        title: 'Prueba 4',
        date: moment().format("L"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        title: 'Prueba 5',
        date: moment().format("L"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
    ];
    posts.forEach((item, index) => {
      var post = `
        <article class="posts">
          <h2>${item.title}</h2>
          <span class="date">${item.date}</span>
          <p>${item.content}</p>
          <a href="#" class="mas">Leer mas</a>
        </article>
      `;

      $("#posts").append(post);
    });
}
//selector de tema

    var theme = $("#theme");
    $("#toGreen").click(function () {
      theme.attr("href", "css/green.css");
      localStorage.setItem("theme", "css/green.css");
    });

    $("#toRed").click(function () {
      theme.attr("href", "css/red.css");
       localStorage.setItem("theme", "css/red.css");
    });

    $("#toBlue").click(function () {
      theme.attr("href", "css/blue.css");
      localStorage.setItem("theme", "css/blue.css");
    });

    if(localStorage.getItem("theme")){
      var storage = localStorage.getItem("theme");
      theme.attr('href', storage);
    }else{
      theme.attr('href', 'css/green.css');    
    } 

//scroll Arriba
    $('.subir').click(function(e){
      e.preventDefault();
     $('html, body').animate({
      scrollTop: 0
     }, 500); 
     return false;
    });
 

//Login falso

  var formName = localStorage.getItem("formName");
  
  if (formName !== null && formName !== undefined) {
    var aboutP = $("#about p");
    aboutP.html("<strong>Bienvenido, " + formName + "</strong>");
    aboutP.append("<a href='#' id='logout'>Cerrar sesión</a>");

    $("#login").hide();
  }

  $("#login form").submit(function(e) {
    e.preventDefault(); // Evita que el formulario se envíe
    var formName = $("#formName").val();
    localStorage.setItem("formName", formName);
    $(this)[0].reset(); // Reinicia el formulario

    // Actualiza la información en el div "about"
    var aboutP = $("#about p");
    aboutP.html("<strong>Bienvenido, " + formName + "</strong>");
    aboutP.append("<a href='#' id='logout'>Cerrar sesión</a>");

    $("#login").hide();
  });

  $(document).on('click', '#logout', function(e) {
    e.preventDefault();
    localStorage.removeItem("formName");
    location.reload();
  });

  //Acordeon de about.html
  if(window.location.href.indexOf('about') > -1){
    $("#acordeon").accordion();
  }

  //Reloj
  if(window.location.href.indexOf('reloj') > -1){
    setInterval(function(){
      var reloj = moment().format("hh:mm:ss");
      $('#reloj').html(reloj);
    },1000);

  }
});