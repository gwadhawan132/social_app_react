import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate=useNavigate();

    const onLogin=()=>{
        navigate("/")
    }
    const onRegister=()=>{
        navigate("/register")
    }
  return (
    <div className='Login'>
    <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">GautamSocial</h3>
            <span className="loginDesc">Connect with friends and world around you on GautamSocial.</span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder='Email' className="loginInput" />
                <input placeholder='Password' className="loginInput" />
                <button className="loginBtn" onClick={onLogin}>Log in</button>
                <span className="loginForgot">Forgot password</span>

                <button className="loginRegisterBtn" onClick={onRegister}>Create a new account</button>
            </div>
        </div>
    </div>
      
    </div>
  )
}
