import React from 'react'
import './Signup.scss'
import Logo from '../images/logo2.png'
import { Link } from 'react-router-dom'

class Signup extends React.Component{
    render(){
        return(
            <div className="signup-container">
                <img src={Logo} alt={Logo} className="signup-logo"/>
                <div className="signup-input-container">
                    <div className="signup-input-text">회원 정보 입력</div>
                    <input placeholder="아이디" className="signup-input-username"/>
                    <input type="password" placeholder="비밀번호" className="signup-input-password"/>
                    <input type="password" placeholder="비밀번호 확인" className="signup-input-checkpassword"/>
                    <input placeholder="이름" className="signup-input-name"/>
                    <input placeholder="휴대전화" className="signup-input-phone"/>
                    <input placeholder="E - mail" className="signup-input-email"/>
                    <div className="signup-terms">약관 동의</div>
                    <div className="signup-terms-container">
                        <div className="signup-terms-container-left">
                            <input type="checkbox" id="signup-terms-allow"/>
                            <label for="signup-terms-allow"/>
                            <span className="signup-terms-text">이용 약관 동의 (필수)</span>
                        </div>
                        <div className="signup-terms-container-right">
                            <Link to="/account/signup/1" className="show-content">내용 보기</Link>
                        </div>
                    </div>
                    <div className="signup-private-container">
                        <div className="signup-private-container-left">
                            <input type="checkbox" id="signup-private-info"/>
                            <label for="signup-private-info"/>
                            <span className="signup-private-text">개인정보처리방침 동의 (필수)</span>
                        </div>
                        <div className="signup-private-container-right">
                            <Link to="/account/signup/2" className="show-content">내용 보기</Link>
                        </div>
                    </div>
                    <div className="signup-btn">회원 가입</div>
                </div>
            </div>
        )  
    }
}

export default Signup