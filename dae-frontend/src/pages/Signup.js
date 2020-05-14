import React from 'react'
import './Signup.scss'
import Logo from '../images/logo2.png'
import { Link } from 'react-router-dom'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import axios from 'axios'

@observer
class Signup extends React.Component{

    @observable username = ""
    @observable password = ""
    @observable checkpassword = ""
    @observable name = ""
    @observable phone = ""
    @observable email = ""
    @observable privacy = false
    @observable terms = false
    @observable duplicate = false
    @observable check_Pw = false
    
    @action handleChange = (e) => {
        const { name, value } = e.target
        this[name] = value
    }
    @action handleCheckboxChange = (e) => {
        const { name, checked } = e.target
        this[name] = checked
    }
    @action duplicate_Username = () => {
        if(this.username.length>=6 && this.username.length<=11){
            axios.post("http://localhost:8000/users/duplicate/", ({
                username: this.username
            }))
            .then(res => {
                if(res.data==="username already exist"){
                    alert("이미 사용중인 아이디 입니다.")
                } else {
                    alert("사용 가능한 아이디 입니다.")
                    this.duplicate = true
                }
            })
            .catch(err => {
                console.log(err)
            })
        } else {
            alert("아이디는 6자에서 11자 사이로 입력해주시기 바랍니다.")
        }
    }
    @action check_Password = () => {
        if(this.password.length>=6 && this.password.length<=11){
            if(this.password!==this.checkpassword){
                alert("비밀번호가 일치하지 않습니다.")
            } else {
                alert("비밀번호가 일치합니다.")
                this.check_Pw = true
            }
        } else {
            alert("비밀번호는 6자에서 11자 사이로 입력해주시기 바랍니다.")
        }  
    }
    @action signUp = () => {
        if(this.duplicate===false){
            alert("아이디 중복확인을 해 주시기 바랍니다.")
        } else {
            if(this.check_Pw===false){
                alert("비밀번호 확인을 해 주시기 바랍니다.")
            } else {
                if(this.name!=="" && this.phone!=="" && this.email!=="" && this.terms===true && this.privacy===true){
                    axios.post("http://localhost:8000/users/", ({
                        username: this.username,
                        name: this.name,
                        password: this.password,
                        phone_number: this.phone,
                        email: this.email
                    }))
                    .then(res => {
                        console.log(res)
                        this.props.history.push("/")
                        localStorage.setItem("token", res.data["token"])
                    })
                    .catch(err => {
                        console.log(err)
                    })
                } else {
                    if(this.privacy===false){
                        alert("개인정보처리방침에 동의해주시기 바랍니다.")
                    } else if(this.terms===false){
                        alert("이용 약관에 동의해주시기 바랍니다.")
                    } else {
                        alert("입력창을 확인해주시기 바랍니다.")
                    }
                }
            }
        }
    }

    render(){
        return(
            <div className="signup-container">
                <img src={Logo} alt={Logo} className="signup-logo"/>
                <div className="signup-input-container">
                    <div className="signup-input-text">회원 정보 입력</div>
                    <div className="signup-input-username-container">
                        <input onChange={this.handleChange} value={this.username} name="username" placeholder="아이디" className="signup-input-username"/>
                        <div className="signup-username-duplicate-container">
                            <div className="signup-username-duplicate" onClick={() => this.duplicate_Username()}>아이디 중복확인</div>
                        </div>
                    </div>
                    <input onChange={this.handleChange} value={this.password} name="password" type="password" placeholder="비밀번호" className="signup-input-password"/>
                    <div className="signup-input-checkpassword-container">
                        <input onChange={this.handleChange} value={this.checkpassword} name="checkpassword" type="password" placeholder="비밀번호 확인" className="signup-input-checkpassword"/>
                        <div className="signup-checkpassword-btn-container">
                            <div className="signup-checkpassword-btn" onClick={() => this.check_Password()}>비밀번호 확인</div>
                        </div>
                    </div>
                    <input onChange={this.handleChange} value={this.name} name="name" placeholder="이름" className="signup-input-name"/>
                    <input onChange={this.handleChange} value={this.phone} name="phone" placeholder="휴대전화(숫자만 입력)" className="signup-input-phone"/>
                    <input onChange={this.handleChange} value={this.email} name="email" placeholder="E - mail" className="signup-input-email"/>
                    <div className="signup-terms">약관 동의</div>
                    <div className="signup-terms-container">
                        <div className="signup-terms-container-left">
                            <input checked={this.terms} onChange={this.handleCheckboxChange} name="terms" type="checkbox" id="signup-terms-allow"/>
                            <label htmlFor="signup-terms-allow"/>
                            <span className="signup-terms-text">이용 약관 동의 (필수)</span>
                        </div>
                        <div className="signup-terms-container-right">
                            <Link to="/account/signup/1" className="show-content">내용 보기</Link>
                        </div>
                    </div>
                    <div className="signup-private-container">
                        <div className="signup-private-container-left">
                            <input checked={this.privacy} onChange={this.handleCheckboxChange} name="privacy" type="checkbox" id="signup-private-info"/>
                            <label htmlFor="signup-private-info"/>
                            <span className="signup-private-text">개인정보처리방침 동의 (필수)</span>
                        </div>
                        <div className="signup-private-container-right">
                            <Link to="/account/signup/2" className="show-content">내용 보기</Link>
                        </div>
                    </div>
                    <div className="signup-btn" onClick={() => this.signUp()}>회원 가입</div>
                </div>
            </div>
        )  
    }
}

export default Signup