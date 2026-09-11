/* Validaciones para el formulario de registro */

document.getElementById('formularioRegistro').addEventListener('submit', function(evento) {
    // Evita el envío automático hasta verificar los datos
    evento.preventDefault(); 

    let esValido = true;

    // Función auxilar para mostrar error
    function mostrarError(idElemento, idError, mensaje) {
        const campo = document.getElementById(idElemento);
        const error = document.getElementById(idError);
        if (campo) campo.classList.add('input-error');
        if (error) {
            error.textContent = mensaje;
            error.classList.add('activo');
        }
        esValido = false;
    }

    // Función auxilar para limpiar error
    function limpiarError(idElemento, idError) {
        const campo = document.getElementById(idElemento);
        const error = document.getElementById(idError);
        if (campo) campo.classList.remove('input-error');
        if (error) {
            error.textContent = '';
            error.classList.remove('activo');
        }
    }

    // 1. Nombre
    const nombre = document.getElementById('nombre');
    if (nombre.value.trim() === '') {
        mostrarError('nombre', 'error-nombre', 'El nombre no puede estar vacío.');
    } else {
        limpiarError('nombre', 'error-nombre');
    }

    // 2. Apellido Paterno
    const apPaterno = document.getElementById('apellidopaterno');
    if (apPaterno.value.trim() === '') {
        mostrarError('apellidopaterno', 'error-apellidopaterno', 'El apellido paterno no puede estar vacío.');
    } else {
        limpiarError('apellidopaterno', 'error-apellidopaterno');
    }

    // 3. Apellido Materno
    const apMaterno = document.getElementById('apellidomaterno');
    if (apMaterno.value.trim() === '') {
        mostrarError('apellidomaterno', 'error-apellidomaterno', 'El apellido materno no puede estar vacío.');
    } else {
        limpiarError('apellidomaterno', 'error-apellidomaterno');
    }

    // 4. Fecha de Nacimiento (Validación 18+ años)
    const fecha = document.getElementById('fechanacimiento');
    if (fecha.value === '') {
        mostrarError('fechanacimiento', 'error-fechanacimiento', 'Ingresa tu fecha de nacimiento.');
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
        } else {
            limpiarError('fechanacimiento', 'error-fechanacimiento');
        }
    }

    // 5. RUT
    const rut = document.getElementById('rut');
    // Verifica que sean entre 7 u 8 números, un guion y un número o la letra K
    const regexRutSimple = /^\d{7,8}-[\dkK]$/;

    if (rut.value.trim() === '') {
        mostrarError('rut', 'error-rut', 'El RUT no puede estar vacío.');
    } else if (!regexRutSimple.test(rut.value.trim())) {
        mostrarError('rut', 'error-rut', 'Ingresa un RUT válido con guion (ej: 12345678-9).');
    } else {
        limpiarError('rut', 'error-rut');
    }

    // 6. Número de Documento
    const nroDoc = document.getElementById('nrodocumento');
    // Permite entre 8 y 10 dígitos o letras (ej: 123456789 o A12345678)
    const regexNroDoc = /^[a-zA-Z0-9]{8,10}$/;

    if (nroDoc.value.trim() === '') {
        mostrarError('nrodocumento', 'error-nrodocumento', 'El número de documento no puede estar vacío.');
    } else if (!regexNroDoc.test(nroDoc.value.trim())) {
        mostrarError('nrodocumento', 'error-nrodocumento', 'Debe tener entre 8 y 10 caracteres (sin puntos ni guiones).');
    } else {
        limpiarError('nrodocumento', 'error-nrodocumento');
    }

    // 7. Seguro Médico
    const seguro = document.getElementById('tiposeguro');
    if (seguro.value === 'selecciona') {
        mostrarError('tiposeguro', 'error-tiposeguro', 'Selecciona un seguro médico.');
    } else {
        limpiarError('tiposeguro', 'error-tiposeguro');
    }

    // 8. Género
    const genero = document.getElementById('genero');
    if (genero.value === 'selecciona') {
        mostrarError('genero', 'error-genero', 'Selecciona una opción de género.');
    } else {
        limpiarError('genero', 'error-genero');
    }

    // 9. Región
    const region = document.getElementById('region');
    if (region.value === 'selecciona') {
        mostrarError('region', 'error-region', 'Selecciona tu región.');
    } else {
        limpiarError('region', 'error-region');
    }

    // 10. Dirección
    const direccion = document.getElementById('direccion');
    if (direccion.value.trim() === '') {
        mostrarError('direccion', 'error-direccion', 'La dirección no puede estar vacía.');
    } else {
        limpiarError('direccion', 'error-direccion');
    }

    // 11. Correo Electrónico
    const email = document.getElementById('email');
    if (email.value.trim() === '') {
        mostrarError('email', 'error-email', 'El correo electrónico no puede estar vacío.');
    } else {
        limpiarError('email', 'error-email');
    }

    // 12. Teléfono
    const telefono = document.getElementById('telefono');
    // Acepta 9 dígitos (ej: 912345678) o con prefijo (+56912345678)
    const regexTelefono = /^(\+?56)?\s?9\d{8}$/;

    if (telefono.value.trim() === '') {
        mostrarError('telefono', 'error-telefono', 'El teléfono no puede estar vacío.');
    } else if (!regexTelefono.test(telefono.value.trim())) {
        mostrarError('telefono', 'error-telefono', 'Ingresa un teléfono válido de 9 dígitos (ej: 912345678 o +56912345678).');
    } else {
        limpiarError('telefono', 'error-telefono');
    }

    // 13. Contraseña y Confirmación
    const pass = document.getElementById('password');
    const confirmPass = document.getElementById('confirmarpassword');

    if (pass.value === '') {
        mostrarError('password', 'error-password', 'Ingresa una contraseña.');
    } else {
        limpiarError('password', 'error-password');
    }

    if (confirmPass.value === '') {
        mostrarError('confirmarpassword', 'error-confirmarpassword', 'Confirma tu contraseña.');
    } else if (pass.value !== confirmPass.value) {
        mostrarError('confirmarpassword', 'error-confirmarpassword', 'Las contraseñas no coinciden.');
    } else {
        limpiarError('confirmarpassword', 'error-confirmarpassword');
    }

    // 14. Términos y Condiciones
    const terminos = document.getElementById('terminos');
    if (!terminos.checked) {
        mostrarError('terminos', 'error-terminos', 'Debes aceptar los términos y condiciones.');
    } else {
        limpiarError('terminos', 'error-terminos');
    }

    // Envío si todo está correcto
    if (esValido) {
        this.submit();
    }
});