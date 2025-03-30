async function loginUser(correo, contraseña) {
  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ correo, contraseña }),
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error en la petición');
    }
    
    const data = await response.json();
    return data
} catch (error) {
    console.error('Error en loginUser:', error);
    throw error; 
  }
}

export { loginUser }