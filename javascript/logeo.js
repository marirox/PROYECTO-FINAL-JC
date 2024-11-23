document.getElementById("formLogin").addEventListener("submit", function (event) { 
    event.preventDefault(); // Evita que se recargue la página

    const correoLogin = document.getElementById("correoLogin").value; // Se obtiene el valor del input de correo
    const contrasenaLogin = document.getElementById("contrasenaLogin").value; // Se obtiene el valor del input de contraseña

    const usuarioRegistrado = JSON.parse(localStorage.getItem("usuarioRegistrado")); // Se obtiene el usuario registrado del localStorage

    // Condicional, si el correo y la contraseña coinciden con los del localStorage
    if (usuarioRegistrado && usuarioRegistrado.correo === correoLogin && usuarioRegistrado.contrasena === contrasenaLogin) {
        localStorage.setItem("nombreUsuario", usuarioRegistrado.nombre); // Se guarda el nombre del usuario en el localStorage
        window.location.href = "../index.html"; // Redirige a la página de saludo
    } else {
        alert("Correo o contraseña incorrectos."); // Muestra alerta si los datos no coinciden
    }
});
