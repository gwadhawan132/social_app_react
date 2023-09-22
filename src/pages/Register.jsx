import { useNavigate } from 'react-router-dom';
import './Register.css';

export default function Login() {
    const navigate=useNavigate();

    const onLoginPage=()=>{
        navigate("/login")
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
                <input placeholder='Username' className="loginInput" />
                <input placeholder='Email' className="loginInput" />
                <input placeholder='Password' className="loginInput" />
                <input placeholder='Confirm Password' className="loginInput" />
                <button className="loginBtn">Sign up</button>

                <button className="loginRegisterBtn" onClick={onLoginPage}>Log into account</button>
            </div>
        </div>
    </div>
      
    </div>
  )
}
