
window.onload = function() {
  $.ajax({
    url: 'funciones/consultar_poemas.php',
    method: 'POST',
    dataType: 'text',
    success: function(respuesta) {
      //alert(respuesta);
      
    },
    error: function() {
      alert("Algo salió mal");
    }
  });
};

function funcion() {
  var fondo=document.getElementById("fondo_imagen");
  var prueba = document.getElementById("switch");
  var body = document.body;
  var circulo = document.getElementsByClassName("circulo");
  var nombre = document.getElementsByClassName("nombre");


  if (prueba.checked) {
    var poemas = document.getElementsByClassName("contenido");
    body.style.backgroundImage = "linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)";
    fondo.style.backgroundImage="url(funciones/files/nubes.png)";
    
    for (var i = 0; i < poemas.length; i++) { //POEMAS
      poemas[i].style.backgroundImage = "url(funciones/files/choppa.jpg)";
      circulo[i].style.backgroundColor="black";
      nombre[i].innerText="ideas";//cambia al otro
    }


    

  } else {
    var ideas = document.getElementsByClassName("contenido"); 
    body.style.backgroundImage = "linear-gradient(99.9deg, rgba(27,24,31,1) 21.2%, rgba(50,4,89,1) 84.8%)";
    fondo.style.backgroundImage="url(funciones/files/estrellas.png)";

    
    for (var i = 0; i < ideas.length; i++) { //IDEAS
      ideas[i].style.backgroundImage = "url(funciones/files/uranio.png)";
      circulo[i].style.backgroundColor="white";
      nombre[i].innerText="poemas";//cambia al otro

    }


  }
  
  }