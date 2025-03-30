function gradoItem() {
    // Crear el contenedor del grado
    let gradoContainer = document.createElement('div');
    gradoContainer.className = "grado-item";

    // Crear el nombre del grado
    let gradoName = document.createElement('span');
    gradoName.textContent = "IIIbasico";
    gradoName.className = "grado-name";

    // Crear un contenedor para la información adicional (opcional)
    let gradoDetails = document.createElement('div');
    gradoDetails.className = "grado-details";
    gradoDetails.textContent = `Más detalles sobre III Básico`;

    // Crear un evento para manejar la selección del grado
    gradoContainer.addEventListener('click', () => {
        // Cambiar la URL (opcional, si se quiere cargar el grado de forma dinámica)
        history.pushState(null, null, `/grado/${grado.id}`);

        // Llamar a una función para cargar los detalles del grado
        cargarGrado(grado);
    });

    // Agregar el nombre del grado y los detalles al contenedor
    gradoContainer.appendChild(gradoName);
    gradoContainer.appendChild(gradoDetails);

    // Agregar CSS en el archivo index.
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './componentes/modulos/grados/grado_item.css';
    document.head.appendChild(link);


    return gradoContainer;
}


export { gradoItem }