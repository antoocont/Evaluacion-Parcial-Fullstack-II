/* FUNCIONES GLOBALES (registro y login)*/
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

/* Validaciones para el formulario de registro */
const formRegistro = document.getElementById('formularioRegistro');

// Solo ejecuta esto si encuentra el formulario de registro en la pantalla
if (formRegistro) {
    formRegistro.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Detiene el envío automático
        let esValido = true;

        // 1. Nombre
        const nombre = document.getElementById('nombre');
        if (nombre.value.trim() === '') {
            mostrarError('nombre', 'error-nombre', 'El nombre no puede estar vacío.');
            esValido = false;
        } else {
            limpiarError('nombre', 'error-nombre');
        }

        // 2. Apellido Paterno
        const apPaterno = document.getElementById('apellidopaterno');
        if (apPaterno.value.trim() === '') {
            mostrarError('apellidopaterno', 'error-apellidopaterno', 'El apellido paterno no puede estar vacío.');
            esValido = false;
        } else {
            limpiarError('apellidopaterno', 'error-apellidopaterno');
        }

        // 3. Apellido Materno
        const apMaterno = document.getElementById('apellidomaterno');
        if (apMaterno.value.trim() === '') {
            mostrarError('apellidomaterno', 'error-apellidomaterno', 'El apellido materno no puede estar vacío.');
            esValido = false;
        } else {
            limpiarError('apellidomaterno', 'error-apellidomaterno');
        }

        // 4. Fecha de Nacimiento (Validación 18+ años)
        const fecha = document.getElementById('fechanacimiento');
        if (fecha.value === '') {
            mostrarError('fechanacimiento', 'error-fechanacimiento', 'Ingresa tu fecha de nacimiento.');
            esValido = false;
        } else {
            const fechaNac = new Date(fecha.value);
            const hoy = new Date();
            let edad = hoy.getFullYear() - fechaNac.getFullYear();
            const mes = hoy.getMonth() - fechaNac.getMonth();

            if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
                edad--;
            }

            if (edad < 18) {
                mostrarError('fechanacimiento', 'error-fechanacimiento', 'Debes ser mayor de 18 años para registrarte.');
                esValido = false;
            } else {
                limpiarError('fechanacimiento', 'error-fechanacimiento');
            }
        }

        // 5. RUT
        const rut = document.getElementById('rut');
        const regexRutSimple = /^\d{7,8}-[\dkK]$/;
        if (rut.value.trim() === '') {
            mostrarError('rut', 'error-rut', 'El RUT no puede estar vacío.');
            esValido = false;
        } else if (!regexRutSimple.test(rut.value.trim())) {
            mostrarError('rut', 'error-rut', 'Ingresa un RUT válido con guion (ej: 12345678-9).');
            esValido = false;
        } else {
            limpiarError('rut', 'error-rut');
        }

        // 6. Número de Documento
        const nroDoc = document.getElementById('nrodocumento');
        const regexNroDoc = /^[a-zA-Z0-9]{8,10}$/;
        if (nroDoc.value.trim() === '') {
            mostrarError('nrodocumento', 'error-nrodocumento', 'El número de documento no puede estar vacío.');
            esValido = false;
        } else if (!regexNroDoc.test(nroDoc.value.trim())) {
            mostrarError('nrodocumento', 'error-nrodocumento', 'Debe tener entre 8 y 10 caracteres (sin puntos ni guiones).');
            esValido = false;
        } else {
            limpiarError('nrodocumento', 'error-nrodocumento');
        }

        // 7. Seguro Médico
        const seguro = document.getElementById('tiposeguro');
        if (seguro.value === 'selecciona') {
            mostrarError('tiposeguro', 'error-tiposeguro', 'Selecciona un seguro médico.');
            esValido = false;
        } else {
            limpiarError('tiposeguro', 'error-tiposeguro');
        }

        // 8. Género
        const genero = document.getElementById('genero');
        if (genero.value === 'selecciona') {
            mostrarError('genero', 'error-genero', 'Selecciona una opción de género.');
            esValido = false;
        } else {
            limpiarError('genero', 'error-genero');
        }

        // 9. Región
        const region = document.getElementById('region');
        if (region.value === 'selecciona') {
            mostrarError('region', 'error-region', 'Selecciona tu región.');
            esValido = false;
        } else {
            limpiarError('region', 'error-region');
        }

        // 10. Dirección
        const direccion = document.getElementById('direccion');
        if (direccion.value.trim() === '') {
            mostrarError('direccion', 'error-direccion', 'La dirección no puede estar vacía.');
            esValido = false;
        } else {
            limpiarError('direccion', 'error-direccion');
        }

        // 11. Correo Electrónico
        const email = document.getElementById('email');
        if (email.value.trim() === '') {
            mostrarError('email', 'error-email', 'El correo electrónico no puede estar vacío.');
            esValido = false;
        } else {
            limpiarError('email', 'error-email');
        }

        // 12. Teléfono
        const telefono = document.getElementById('telefono');
        const regexTelefono = /^(\+?56)?\s?9\d{8}$/;
        if (telefono.value.trim() === '') {
            mostrarError('telefono', 'error-telefono', 'El teléfono no puede estar vacío.');
            esValido = false;
        } else if (!regexTelefono.test(telefono.value.trim())) {
            mostrarError('telefono', 'error-telefono', 'Ingresa un teléfono de 9 dígitos (ej: 912345678).');
            esValido = false;
        } else {
            limpiarError('telefono', 'error-telefono');
        }

        // 13. Contraseña y Confirmación
        const pass = document.getElementById('password');
        const confirmPass = document.getElementById('confirmarpassword');

        if (pass.value === '') {
            mostrarError('password', 'error-password', 'Ingresa una contraseña.');
            esValido = false;
        } else {
            limpiarError('password', 'error-password');
        }

        if (confirmPass.value === '') {
            mostrarError('confirmarpassword', 'error-confirmarpassword', 'Confirma tu contraseña.');
            esValido = false;
        } else if (pass.value !== confirmPass.value) {
            mostrarError('confirmarpassword', 'error-confirmarpassword', 'Las contraseñas no coinciden.');
            esValido = false;
        } else {
            limpiarError('confirmarpassword', 'error-confirmarpassword');
        }

        // 14. Términos y Condiciones
        const terminos = document.getElementById('terminos');
        if (!terminos.checked) {
            mostrarError('terminos', 'error-terminos', 'Debes aceptar los términos y condiciones.');
            esValido = false;
        } else {
            limpiarError('terminos', 'error-terminos');
        }

        // Envío final
        if (esValido) {
            this.submit();
        }
    });
}

/* Validaciones para el formulario de inicio de sesión */
const formLogin = document.getElementById('formularioLogin');

// Solo ejecuta esto si encuentra el formulario de login en la pantalla
if (formLogin) {
    formLogin.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Detiene el envío automático
        let esValido = true;

        // Validar RUT
        const rutLogin = document.getElementById('rutLogin');
        const regexRutSimple = /^\d{7,8}-[\dkK]$/;

        if (rutLogin.value.trim() === '') {
            mostrarError('rutLogin', 'error-rutLogin', 'Debes ingresar tu RUT.');
            esValido = false;
        } else if (!regexRutSimple.test(rutLogin.value.trim())) {
            mostrarError('rutLogin', 'error-rutLogin', 'Ingresa un RUT válido con guion (ej: 12345678-9).');
            esValido = false;
        } else {
            limpiarError('rutLogin', 'error-rutLogin');
        }

        // Validar Contraseña
        const passLogin = document.getElementById('passLogin');
        if (passLogin.value.trim() === '') {
            mostrarError('passLogin', 'error-passLogin', 'La contraseña no puede estar vacía.');
            esValido = false;
        } else {
            limpiarError('passLogin', 'error-passLogin');
        }

        // Envío final
        if (esValido) {
            this.submit();
        }
    });
}