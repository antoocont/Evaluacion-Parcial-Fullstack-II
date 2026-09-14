
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


const formRegistro = document.getElementById('formularioRegistro');


if (formRegistro) {
    formRegistro.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Detiene el envío automático
        let esValido = true;

      
        const nombre = document.getElementById('nombre');
        if (nombre.value.trim() === '') {
            mostrarError('nombre', 'error-nombre', 'El nombre no puede estar vacío.');
            esValido = false;
        } else {
            limpiarError('nombre', 'error-nombre');
        }

       
        const apPaterno = document.getElementById('apellidopaterno');
        if (apPaterno.value.trim() === '') {
            mostrarError('apellidopaterno', 'error-apellidopaterno', 'El apellido paterno no puede estar vacío.');
            esValido = false;
        } else {
            limpiarError('apellidopaterno', 'error-apellidopaterno');
        }

      
        const apMaterno = document.getElementById('apellidomaterno');
        if (apMaterno.value.trim() === '') {
            mostrarError('apellidomaterno', 'error-apellidomaterno', 'El apellido materno no puede estar vacío.');
            esValido = false;
        } else {
            limpiarError('apellidomaterno', 'error-apellidomaterno');
        }

        
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

       
        const seguro = document.getElementById('tiposeguro');
        if (seguro.value === 'selecciona') {
            mostrarError('tiposeguro', 'error-tiposeguro', 'Selecciona un seguro médico.');
            esValido = false;
        } else {
            limpiarError('tiposeguro', 'error-tiposeguro');
        }

       
        const genero = document.getElementById('genero');
        if (genero.value === 'selecciona') {
            mostrarError('genero', 'error-genero', 'Selecciona una opción de género.');
            esValido = false;
        } else {
            limpiarError('genero', 'error-genero');
        }

        
        const region = document.getElementById('region');
        if (region.value === 'selecciona') {
            mostrarError('region', 'error-region', 'Selecciona tu región.');
            esValido = false;
        } else {
            limpiarError('region', 'error-region');
        }

       
        const direccion = document.getElementById('direccion');
        if (direccion.value.trim() === '') {
            mostrarError('direccion', 'error-direccion', 'La dirección no puede estar vacía.');
            esValido = false;
        } else {
            limpiarError('direccion', 'error-direccion');
        }

       
        const email = document.getElementById('email');
        if (email.value.trim() === '') {
            mostrarError('email', 'error-email', 'El correo electrónico no puede estar vacío.');
            esValido = false;
        } else {
            limpiarError('email', 'error-email');
        }

       
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

      
        const terminos = document.getElementById('terminos');
        if (!terminos.checked) {
            mostrarError('terminos', 'error-terminos', 'Debes aceptar los términos y condiciones.');
            esValido = false;
        } else {
            limpiarError('terminos', 'error-terminos');
        }

       
        if (esValido) {
            this.submit();
        }
    });
}


const formLogin = document.getElementById('formularioLogin');


if (formLogin) {
    formLogin.addEventListener('submit', function(evento) {
        evento.preventDefault(); 
        let esValido = true;

     
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

        
        const passLogin = document.getElementById('passLogin');
        if (passLogin.value.trim() === '') {
            mostrarError('passLogin', 'error-passLogin', 'La contraseña no puede estar vacía.');
            esValido = false;
        } else {
            limpiarError('passLogin', 'error-passLogin');
        }

      
        if (esValido) {
            this.submit();
        }
    });
}


const formContacto = document.getElementById('formularioContacto');

if (formContacto) {
    formContacto.addEventListener('submit', function(evento) {
        evento.preventDefault();
        let esValido = true;

      
        const nombre = document.getElementById('nombre');
        if (nombre.value.trim() === '') {
            mostrarError('nombre', 'error-nombre', 'El nombre no puede estar vacío.');
            esValido = false;
        } else if (nombre.value.trim().length < 3) {
            mostrarError('nombre', 'error-nombre', 'Ingresa tu nombre completo.');
            esValido = false;
        } else {
            limpiarError('nombre', 'error-nombre');
        }

        
        const email = document.getElementById('email');
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === '') {
            mostrarError('email', 'error-email', 'El correo electrónico no puede estar vacío.');
            esValido = false;
        } else if (!regexEmail.test(email.value.trim())) {
            mostrarError('email', 'error-email', 'Ingresa un correo electrónico válido.');
            esValido = false;
        } else {
            limpiarError('email', 'error-email');
        }

       
        const telefono = document.getElementById('telefono');
        const regexTelefono = /^(\+?56)?\s?9\d{8}$/;
        if (telefono.value.trim() === '') {
            mostrarError('telefono', 'error-telefono', 'El teléfono no puede estar vacío.');
            esValido = false;
        } else if (!regexTelefono.test(telefono.value.trim().replace(/\s/g, ''))) {
            mostrarError('telefono', 'error-telefono', 'Ingresa un teléfono válido (ej: +56 9 1234 5678).');
            esValido = false;
        } else {
            limpiarError('telefono', 'error-telefono');
        }
        
        const asunto = document.getElementById('asunto');
        if (asunto.value === '') {
            mostrarError('asunto', 'error-asunto', 'Selecciona un motivo de contacto.');
            esValido = false;
        } else {
            limpiarError('asunto', 'error-asunto');
        }

       
        const mensaje = document.getElementById('mensaje');
        if (mensaje.value.trim() === '') {
            mostrarError('mensaje', 'error-mensaje', 'El mensaje no puede estar vacío.');
            esValido = false;
        } else if (mensaje.value.trim().length < 10) {
            mostrarError('mensaje', 'error-mensaje', 'Tu mensaje debe tener al menos 10 caracteres.');
            esValido = false;
        } else {
            limpiarError('mensaje', 'error-mensaje');
        }

       
        if (esValido) {
            this.submit();
        }
    });
}



const MEDICOS_POR_ESPECIALIDAD = {
    "Medicina General": ["Dra. María Pérez"],
    "Pediatría": ["Dr. Juan López"],
    "Ginecología": ["Dra. Ana González"],
    "Traumatología": ["Dr. Carlos Soto"],
    "Dermatología": ["Dra. Elena Rojas"]
};

document.addEventListener('DOMContentLoaded', () => {
   
    if (document.getElementById('formAgendar')) {
        initAgendarCita();
    }

    if (document.getElementById('contenedorCita')) {
        initVerCita();
    }
});


function initAgendarCita() {
    const especialidadSelect = document.getElementById('especialidad');
    const medicoSelect = document.getElementById('medico');
    const fechaInput = document.getElementById('fecha');
    const formAgendar = document.getElementById('formAgendar');

   
    const hoy = new Date().toISOString().split('T')[0];
    fechaInput.setAttribute('min', hoy);

    
    especialidadSelect.addEventListener('change', () => {
        const especialidad = especialidadSelect.value;
        medicoSelect.innerHTML = '<option value="">-- Selecciona un médico --</option>';

        if (especialidad && MEDICOS_POR_ESPECIALIDAD[especialidad]) {
            MEDICOS_POR_ESPECIALIDAD[especialidad].forEach(medico => {
                const option = document.createElement('option');
                option.value = medico;
                option.textContent = medico;
                medicoSelect.appendChild(option);
            });
            medicoSelect.disabled = false;
        } else {
            medicoSelect.innerHTML = '<option value="">-- Selecciona primero una especialidad --</option>';
            medicoSelect.disabled = true;
        }
    });

  
    formAgendar.addEventListener('submit', (e) => {
        e.preventDefault();

        const especialidad = especialidadSelect.value;
        const medico = medicoSelect.value;
        const fecha = fechaInput.value;
        const hora = document.getElementById('hora').value;
        const observaciones = document.getElementById('observaciones').value.trim();

      
        if (!especialidad || !medico || !fecha || !hora) {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }

       
        const nuevaCita = {
            id: 'ST-' + Math.floor(100000 + Math.random() * 900000),
            especialidad: especialidad,
            medico: medico,
            fecha: fecha,
            hora: hora,
            observaciones: observaciones || 'Sin observaciones particulares.',
            estado: 'Confirmada'
        };

    
        localStorage.setItem('citaRegistrada', JSON.stringify(nuevaCita));

        alert('¡Cita agendada exitosamente!');
        window.location.href = 'cita_medica.html';
    });
}


function initVerCita() {
    renderizarDetalleCita();
}

function renderizarDetalleCita() {
    const contenedor = document.getElementById('contenedorCita');
    const citaGuardada = localStorage.getItem('citaRegistrada');

    if (!citaGuardada) {
        contenedor.innerHTML = `
            <div class="sin-citas">
                <h3>No posees citas médicas agendadas en este momento.</h3>
                <p>Haz clic en el botón de abajo para reservar una nueva hora.</p>
            </div>
        `;
        return;
    }

    const cita = JSON.parse(citaGuardada);

    contenedor.innerHTML = `
        <div class="header-cita-card">
            <span class="codigo-cita">Código: <strong>${cita.id}</strong></span>
            <span class="badge-estado ${cita.estado === 'Confirmada' ? 'estado-activa' : 'estado-cancelada'}">
                ${cita.estado}
            </span>
        </div>
        <div class="cuerpo-cita-card">
            <p><strong>Especialidad:</strong> ${cita.especialidad}</p>
            <p><strong>Médico:</strong> ${cita.medico}</p>
            <p><strong>Fecha:</strong> ${cita.fecha}</p>
            <p><strong>Hora:</strong> ${cita.hora} hrs</p>
            <p><strong>Motivo / Observaciones:</strong> ${cita.observaciones}</p>
        </div>
        ${cita.estado === 'Confirmada' ? `
            <div class="footer-cita-card">
                <button type="button" id="btnCancelarCita" class="btn-cancelar">Cancelar Cita</button>
            </div>
        ` : ''}
    `;

    
    const btnCancelar = document.getElementById('btnCancelarCita');
    if (btnCancelar) {
        btnCancelar.addEventListener('click', cancelarCita);
    }
}

function cancelarCita() {
    const confirmacion = confirm('¿Estás seguro de que deseas cancelar la cita médica seleccionada?');
    if (confirmacion) {
        localStorage.removeItem('citaRegistrada');
        alert('La cita ha sido cancelada correctamente.');
        renderizarDetalleCita();
    }
}