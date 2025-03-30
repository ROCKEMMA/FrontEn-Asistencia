function header() {
    let header = document.createElement('header');
    header.className = "header";

    let logoContainer = document.createElement('div');
    logoContainer.className = "logo-container";

    let appName = document.createElement('h1');
    appName.textContent = "Asistencia";
    logoContainer.appendChild(appName);

    let userContainer = document.createElement('div');
    userContainer.className = "user-container";

    let userImage = document.createElement('img');
    userImage.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F256%2F10935%2F10935572.png&f=1&nofb=1&ipt=1c5ae84c1bbd7738f1278927071b0b96e31b1f1a2fda0c0440452ff1061d64a1&ipo=images";
    userImage.alt = "JE";
    userImage.className = "user-image";
    
    userContainer.appendChild(userImage);

    header.appendChild(logoContainer);
    header.appendChild(userContainer);

    // Agregar CSS en el archivo index.
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './componentes/views/header_view/header.css';
    document.head.appendChild(link);


    return header;
}

export { header };
