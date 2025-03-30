function verificarSesion() {
    // 1. Buscar en la clave correcta ('usuario')
    const usuarioGuardado = localStorage.getItem('usuario'); // ✔️ Clave consistente
    
    if (!usuarioGuardado) {
        const nuevoUsuario = {
            id: "invitado_001", // ID fijo
            nombre: "Invitado",
            sesionIniciada: false,
            datos: {}
        };
        localStorage.setItem('usuario', JSON.stringify(nuevoUsuario)); // ✔️ Misma clave
        return false;
    }
    
    const usuario = JSON.parse(usuarioGuardado);
    return usuario.sesionIniciada;
}

//-----------------------------------------------
function modificarUsuario(nuevosDatos) {
    const usuarioGuardado = localStorage.getItem('usuario');

    if (!usuarioGuardado) {
        console.warn("No hay un usuario guardado en localStorage.");
        return false;
    }

    let usuario = JSON.parse(usuarioGuardado);
    Object.assign(usuario, nuevosDatos);

    localStorage.setItem('usuario', JSON.stringify(usuario));

    return true;
}

export { verificarSesion, modificarUsuario }