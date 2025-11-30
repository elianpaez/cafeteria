import { Link } from 'react-router-dom';

export function Login() {
  return (
    <main>
      <h2>Iniciar Sesión</h2>
      <form>
        {}
        <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
      </form>
    </main>
  );
}