import React from 'react'
import './NewTest.scss'
import Header from '../components/Header';

class NewTest extends React.Component{
    render(){
        return(
            <div className="newtest-container">
                <Header/>
                <div className="newtest-content-container">
                    <div className="newtest-content-title">TEST 기본 정보 입력</div>
                    <input className="newtest-content-input" placeholder="학년 선택"/>
                    <input className="newtest-content-input" placeholder="TEST 종류 선택"/>
                    <input className="newtest-content-input" placeholder="과목 선택"/>
                    <input className="newtest-content-input" placeholder="TEST 추가 정보 입력"/>
                    <input className="newtest-content-input" placeholder="평균 입력"/>
                    <input className="newtest-content-input" placeholder="표준편차 입력"/>
                    <input className="newtest-content-input" placeholder="응시자 수 입력"/>
                    <div className="newtest-content-btn-container">
                        <div className="newtest-content-btn">등록</div>
                        <div className="newtest-content-btn">TEST 추가 등록</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewTest