import { modificarUsuario } from "../../../servicios/local_storage.js";
function grados() {
    // Crear contenedor principal
    let gradosSection = document.createElement('section');
    gradosSection.className = 'galeria-grados';

    // Lista de grados (array de objetos)
    const listaGrados = [
        { id: 24, nombre: "IV Computación" },
        { id: 25, nombre: "IV Diseño Gráfico" },
        { id: 26, nombre: "IV Biología" },
        { id: 27, nombre: "IV Perito Contador" },
        { id: 28, nombre: "V Computación" },
        { id: 29, nombre: "V Diseño Gráfico" },
        { id: 30, nombre: "V Biología" },
        { id: 31, nombre: "V Perito Contador" },
        { id: 32, nombre: "VI Perito Contador" }
    ];

    // Crear elementos HTML para cada grado
    listaGrados.forEach(grado => {
        let card = document.createElement('div');
        card.className = 'grado-card';
        card.innerHTML = `
            <h3>${grado.nombre}</h3>
            <small>ID: ${grado.id}</small>
        `;
        gradosSection.appendChild(card);
    });

    // Crear botón
    const boton = document.createElement('button');
    boton.textContent = 'cerrar sesión';
    boton.className = 'boton-consola';
    
    // Evento click del botón
    boton.addEventListener('click', () => {
    modificarUsuario({ sesionIniciada: false, nombre: "" })
    location.reload();
    });

    gradosSection.appendChild(boton);

    // Estilos básicos
    const estilos = document.createElement('style');
    estilos.textContent = `
        .galeria-grados {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1rem;
            padding: 1rem;
        }
        .grado-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 1rem;
            text-align: center;
            background-color: #f9f9f9;
        }
        .grado-card h3 {
            margin: 0 0 0.5rem 0;
            color: #333;
        }
        .boton-consola {
            margin: 1rem auto;
            padding: 0.5rem 1rem;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            display: block;
        }
        .boton-consola:hover {
            background-color: #45a049;
        }
    `;
    document.head.appendChild(estilos);

    return gradosSection;
}

export { grados }