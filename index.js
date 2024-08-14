function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    //configuracion de opciones de toastr
    toastr.options = {
        "showMethod": 'slideDown',
        "hideMethod": 'slideUp',
        "closeMethod": 'slideUp',
        "preventDuplicates": true,
        "closeButton": true,
        "newestOnTop": false,
        "positionClass": 'toast-top-center',
        "timeOut": "5000", 
        "extendedTimeOut": "1000", 
    };

    //encriptacion del texto
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.trim().length != 0){ //verificacion con trim() para evitar solo espacios vacios 
      document.getElementById("resultado").value = textoCifrado;
      tituloMensaje.textContent = "¡Texto encriptado con éxito!";
      parrafo.textContent = "";
      muñeco.src = "assets/imagenes/encriptado.png"
    } else {
      muñeco.src = "assets/imagenes/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      toastr.warning("Debes ingresar un texto", "Ooops!");
    }
    }
    
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("resultado").value = textoCifrado;
        tituloMensaje.textContent = "¡Texto desencriptado con éxito!";
        parrafo.textContent = "";
        muñeco.src = "assets/imagenes/encriptado.png";
      } else {
        muñeco.src = "assets/imagenes/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        
      }
  }

  function copiarTexto() {
    let texto = document.getElementById("resultado");

    // Selecciona el texto en el elemento
    texto.select();
    texto.setSelectionRange(0, 99999);

    // Copia el texto al portapapeles
    navigator.clipboard.writeText(texto.value)
        .then(() => {
            toastr.success("¡Texto copiado con éxito!");
        });
} 


  