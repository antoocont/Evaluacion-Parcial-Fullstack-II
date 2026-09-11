/* FUNCIONES GLOBALES DE ERROR */
function mostrarError(idElemento, idError, mensaje) {
    const campo = document.getElementById(idElemento);
    const error = document.getElementById(idError);
    if (campo) campo.classList.add('input-error');
    if (error) {
        error.textContent = mensaje;
        error.classList.add('activo');
    }
}

function limpiarError(idElemento, idError) {
    const campo = document.getElementById(idElemento);
    const error = document.getElementById(idError);
    if (campo) campo.classList.remove('input-error');
    if (error) {
        error.textContent = '';
        error.classList.remove('activo');
    }
}

/* Validaciones para Inicio de Sesión (ADMINISTRADOR) */
const formAdminLogin = document.getElementById('formAdminLogin');

if (formAdminLogin) {
    formAdminLogin.addEventListener('submit', function(evento) {
        evento.preventDefault(); 
        let esValido = true;

        // 1. VALIDACIÓN DEL CORREO ADMIN
        const correoAdmin = document.getElementById('correoAdmin');
        const valorCorreo = correoAdmin.value.trim();
        const regexCorreoAdmin = /^[a-zA-Z0-9._%+-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;

        if (valorCorreo === '') {
            mostrarError('correoAdmin', 'error-correoAdmin', 'El correo es obligatorio.');
            esValido = false;
        } else if (valorCorreo.length > 100) {
            mostrarError('correoAdmin', 'error-correoAdmin', 'Máximo 100 caracteres permitidos.');
            esValido = false;
        } else if (!regexCorreoAdmin.test(valorCorreo)) {
            mostrarError('correoAdmin', 'error-correoAdmin', 'Debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com.');
            esValido = false;
        } else {
            limpiarError('correoAdmin', 'error-correoAdmin');
        }

        // 2. VALIDACIÓN DE LA CONTRASEÑA ADMIN
        const passAdmin = document.getElementById('passAdmin');
        const valorPass = passAdmin.value.trim();

        if (valorPass === '') {
            mostrarError('passAdmin', 'error-passAdmin', 'La contraseña es obligatoria.');
            esValido = false;
        } else if (valorPass.length < 4 || valorPass.length > 10) {
            mostrarError('passAdmin', 'error-passAdmin', 'La contraseña debe tener entre 4 y 10 caracteres.');
            esValido = false;
        } else {
            limpiarError('passAdmin', 'error-passAdmin');
        }

        // 3. ÉXITO (Si no hay errores)
        if (esValido) {
            this.submit();
        }
    });
}