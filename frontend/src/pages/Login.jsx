import { GoogleLogin } from 'react-google-button';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8000/api/auth/google';
  };

  return (
    <div>
      <h1>Login</h1>
      <GoogleLogin onClick={handleGoogleLogin} />
    </div>
  );
}