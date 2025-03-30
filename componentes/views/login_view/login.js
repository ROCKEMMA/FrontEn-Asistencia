import { loginUser } from "../../../servicios/autenticar.js";
import { modificarUsuario } from "../../../servicios/local_storage.js";

function login() {
    let formulario = document.createElement('form');
    formulario.id = 'loginForm';
    formulario.className = 'login-form';

    let container = document.createElement('div');
    container.className = 'login-container';

    let titulo = document.createElement('h2');
    titulo.textContent = 'Iniciar Sesión';

    let correoDiv = document.createElement('div');
    correoDiv.className = 'input-group';
    let correoInput = document.createElement('input');
    correoInput.type = 'text';
    correoInput.id = 'correo';
    correoInput.name = 'correo';
    correoInput.placeholder = 'correo';
    correoInput.required = true;
    correoDiv.appendChild(correoInput);

    let passDiv = document.createElement('div');
    passDiv.className = 'input-group';
    let passInput = document.createElement('input');
    passInput.type = 'password';
    passInput.id = 'password';
    passInput.name = 'password';
    passInput.placeholder = 'Contraseña';
    passInput.required = true;
    passDiv.appendChild(passInput);

    let recoverDiv = document.createElement('div');
    recoverDiv.className = 'recover-section';
    let recoverLink = document.createElement('a');
    recoverLink.href = '#';
    recoverLink.className = 'recover-password';
    recoverLink.textContent = '¿Olvidaste tu contraseña?';
    recoverDiv.appendChild(recoverLink);

    let submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.className = 'login-btn';
    submitBtn.textContent = 'Ingresar';

    container.appendChild(titulo);
    container.appendChild(correoDiv);
    container.appendChild(passDiv);
    container.appendChild(recoverDiv);
    container.appendChild(submitBtn);

    formulario.appendChild(container);
    
    formulario.addEventListener('submit', async function(e) {
        e.preventDefault();

        let correoRecuperado = document.querySelector("#correo").value;
        let contraseñaRecuperada = document.querySelector("#password").value;
        console.log(correoRecuperado, contraseñaRecuperada);

        try {
            const resultado = await loginUser(correoRecuperado, contraseñaRecuperada);
            console.log('Datos del usuario:', resultado.user);
            
            // Acción para caragar el contenido
            if (resultado.success) {
                modificarUsuario({ sesionIniciada: true, nombre: resultado.user.nombre })
                location.reload();
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    });

    // Cargar CSS
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './componentes/views/login_view/login.css';
    document.head.appendChild(link);

    return formulario;
}

export { login }