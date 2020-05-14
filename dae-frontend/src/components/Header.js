import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Logo from '../images/logo2.png'

const Header = () => {
    return (
        <div className="header-container">
            <img src={Logo} alt={Logo} width="190px" height="35px" className="header-logo"/>
            <div className="link-dae-home">대외비 홈페이지 바로가기</div>
            <div className="link-dae-app">[대외비 APP 학습 관리] 프로그램 바로가기</div>
            <Link className="link-login" to="/account/login">로그인</Link>
        </div>
    )
}
//logo 비율=23:5
export default Header