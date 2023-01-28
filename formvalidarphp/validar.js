function validar() {

    let usuario, contraseña;

    usuario = document.getElementById('usuario').value;
    contraseña = document.getElementById('contraseña').value;
    formulario = document.getElementById('formulario').value;

    if (usuario == "" || contraseña == "") {
        alert("Por favor completa los campos");
        return false;
    } else if (usuario === "admin" || contraseña === "pandequeso123"){
        return true;
    } else{
        alert("Usuario y/o contraseña incorrectos");
        return false;
    }
}


function validarRegistro() {
    let nombres, apellidos, estadocivil, telefono, direccion, email;

    nombres = document.getElementById('nombres');
    apellidos = document.getElementById('apellidos');
    estadocivil = document.getElementById('estadocivil');
    telefono = document.getElementById('telefono');
    direccion = document.getElementById('direccion');
    email = document.getElementById('email');

    if(nombres == "" || apellidos == "" || estadocivil == "" || telefono == "" || direccion == "" || email == ""){
        alert("Por favor rellena todos los campos");
        return false;
    } else {
        alert("Registro exitoso");
        return true;
    }
}