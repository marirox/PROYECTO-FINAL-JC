document.getElementById("formRegistro").addEventListener("submit", function (event) { 
    //Se trabaja en el formulario, y se ejecuta la funcion cuando se da click en el boton
    event.preventDefault(); //Evita que se refresque la pagina al mandar los datos

    //Guarda los valores de los inputs en constantes
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    const genero = document.getElementById("genero").value;
    
    //Los datos se guardan en una cosntante que es un objeto
    const usuario = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        contrasena: contrasena,
        genero: genero
    };

    //Se guarda el LocalStorage con los valores del objeto, y el objeto se convierte en un texto
    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));
    window.location.href = "logeo.html"; //Redirige al html
});
