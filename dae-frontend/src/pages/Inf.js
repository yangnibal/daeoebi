import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import './Grademanage.scss'

class Inf extends React.Component{
    render(){
        return(
            <div className="grademanage-container">
                <Header/>
                <div className="grademanage-content-container">
                    <Link className="grademanage-content" to="/inf/vid">동영상 자료</Link>
                    <Link className="grademanage-content" to="/inf/mat">인터넷 검색 자료</Link>
                    <Link className="grademanage-content" to="/">파일 출력 가능 자료</Link>
                </div>
            </div>
        )
    }
}

export default Inf