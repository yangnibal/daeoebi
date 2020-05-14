import React from 'react'
import './Login.scss'
import Logo from '../images/logo2.png'
import { Link } from 'react-router-dom'

class Login extends React.Component{
    render(){
        return(
            <div className="login-container">
                <img src={Logo} alt={Logo} className="login-logo"/>
                <div className="input-container">
                    <span className="selecter">ID</span>
                    <input type="text" className="login-input-username"/>
                </div>
                <div className="input-container">
                    <span className="selecter">비밀번호</span>
                    <input type="password" className="login-input-password"/>
                </div>
                <div className="checkbox-container">
                    <input id="checkbox" type="checkbox" className="login-input-checkbox"/>
                    <label for="checkbox"/>
                    <span className="checkbox-text">아이디 저장</span>
                </div>
                <div className="login-btn">로그인</div>
                <div className="login-others-container">
                    <Link className="login-find-username">아이디 찾기</Link>
                    <Link className="login-find-password">비밀번호 찾기</Link>
                    <Link className="login-signup-link" to="/account/signup">회원 가입</Link>
                </div>
            </div>
        )
    }
}

export default Login