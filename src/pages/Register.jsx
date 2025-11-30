import { Link } from 'react-router-dom';

export function Register() {
  return (
    <main style={{ padding: '20px' }}>
      <h2>Registro de Usuario</h2>
      <form>
        {}
        <label>Email: <input type="email" required /></label><br/>
        <label>Contraseña: <input type="password" required /></label><br/>
        <button type="submit">Registrarse</button>
      </form>
      <p>
        ¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link>
      </p>
    </main>
  );
}