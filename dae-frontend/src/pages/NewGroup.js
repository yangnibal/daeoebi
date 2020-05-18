import React from 'react'
import './NewGroup.scss'
import Header from '../components/Header';

class NewGroup extends React.Component{
    render(){
        return(
            <div className="newgroup-container">
                <Header/>
                <div className="newgroup-content-container">
                    <div className="newgroup-content-title">그룹 생성</div>
                    <input className="newgroup-content-input" placeholder="그룹 이름"/>
                    <input className="newgroup-content-input" placeholder="학기 선택"/>
                    <input className="newgroup-content-input" placeholder="과목 선택"/>
                    <input className="newgroup-content-input" placeholder="내점수 입력"/>
                    <div className="newgroup-content-btn-container">
                        <div className="newgroup-content-btn">등록</div>
                        <div className="newgroup-content-btn">그룹 추가 등록</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewGroup