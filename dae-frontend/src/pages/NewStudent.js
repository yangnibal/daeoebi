import React from 'react'
import './NewStudent.scss'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

class NewStudent extends React.Component{
    render(){
        return(
            <div className="newstudent-container">
                <Header/>
                <div className="newstudent-content-container">
                    <div className="newstudent-content-title">학생 기본 정보 입력</div>
                    <input className="newstudent-content-input" placeholder="학생 이름"/>
                    <input className="newstudent-content-input" placeholder="학년 선택"/>
                    <input className="newstudent-content-input" placeholder="그룹 선택"/>
                    <div className="newstudent-content-group-add-container">
                        <Link to="/academy/group/new" className="newstudent-content-group-add">그룹 추가</Link>
                    </div>
                    <div className="newstudent-content-btn-container">
                        <div className="newstudent-content-btn">등록</div>
                        <div className="newstudent-content-btn">학생 추가 등록</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewStudent