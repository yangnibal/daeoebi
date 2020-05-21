import React from 'react'
import './Print.scss'

class Print extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="sticky-container">
                    <div className="top-content">
                        <div className="top-content-header">
                            <div className="top-content-header-top">
                                <div className="top-content-header-top-title">학교별 <span>9</span>등급 상대평가 변환 성적표</div>
                            </div>
                            <div className="top-content-header-bottom">
                                <div className="top-content-header-bottom-test-type">중1 2학기 중간</div>
                                <div className="top-content-header-bottom-name-grade-group">
                                    <div className="ngg">
                                        <div className="name">홍길동</div>
                                        <div className="grade">중1</div>
                                        <div className="group">A반</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="top-content-body">
                            <div className="top-content-body-first">
                                <div className="top-content-body-title">9등급 상대평가<br/>변환 성적표란?</div>
                                <div className="top-content-body-text">9등급 상대평가는 현 입시제도에서 가장 명확하게 본인의 성적 등급을 확인 할 수 있는 성적산출 방법 입니다.<br/>본인의 백분율 확인을 통해 9등급 범위 안에서도 어느 등급에 더 가까운지 확인이 가능하며, 성적표가 나오지 않는<br/>[내신 기출 모의 테스트]에서도 본인의 성적을 예상 해 볼 수 있는 성적 지표 입니다.</div>
                            </div>
                            <div className="top-content-body-second">
                                <div className="top-content-body-title">9등급 상대평가 기준</div>
                                <div className="top-content-body-text">9등급 상대평가 구분 기준을 표기 합니다.</div>
                            </div>
                            <div className="top-content-body-second">
                                <div className="top-content-body-title">성적표 해석 방법</div>
                                <div className="top-content-body-text">본인의 상대 평가 등급(1~9등급)을 확인 후 나의 백분위를 반드시 확인 합니다. 나의 백분위가 등급컷 백분위 보다 5%이상<br/>높아야 안정적으로 해당 등급으로 판단 할 수 있습니다.</div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <div className="bottom-content-header"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Print