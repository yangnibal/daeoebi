import React from 'react'
import Header from '../components/Header'
import './Test.scss'
import { Link } from 'react-router-dom'

class Test extends React.Component{
    render(){
        return(
            <div className="test-container">
                <Header/>
                <div className="test-content-container">
                    <div className="test-content-header-container">
                        <div className="test-content-header-left">
                            <div className="test-content-title">TEST 목록</div>
                        </div>
                        <div className="test-content-header-right">
                            <Link to="/academy/test/new" className="test-register">Test 등록</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Test