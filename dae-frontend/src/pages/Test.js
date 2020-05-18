import React from 'react'
import Header from '../components/Header'
import './Test.scss'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import DropDown from '../components/DropDown'
import { observable, action } from 'mobx'

@inject('store')
@observer
class Test extends React.Component{

    @observable isClearable = false
    @observable isSearchable = true
    @observable schoolyear = ""
    @observable semester = ""
    @observable subject = ""

    @action schoolyearValueChange = (e) => {
        this.schoolyear = e.value
    }
    @action semesterChange = (e) => {
        this.semester = e.value
    }
    @action subjectChange = (e) => {
        this.subject = e.value
    }
    
    render(){
        const { store } = this.props
        return(
            <div className="test-container">
                <Header/>
                <div className="test-content-container">
                    <div className="test-content-header-container">
                        <div className="test-content-header-left">
                            <div className="test-content-title">TEST 목록</div>
                            <DropDown placeholder="학년" option={store.schoolyear} className="test-content-dropdown-first" classNamePrefix="react-select" onChange={this.schoolyearChange} isClearable={this.isClearable} isSearchable={this.isSearchable}/>
                            <DropDown placeholder="학기" option={store.semester} className="test-content-dropdown-second" classNamePrefix="react-select" onChange={this.semesterChange} isClearable={this.isClearable} isSearchable={this.isSearchable}/>
                            <DropDown placeholder="과목" option={store.subject} className="test-content-dropdown-third" classNamePrefix="react-select" onChange={this.subjectChange} isClearable={this.isClearable} isSearchable={this.isSearchable}/>
                            <div className="test-content-search-btn">검색</div>
                        </div>
                        <div className="test-content-header-right">
                            <Link to="/academy/test/new" className="test-register">TEST 등록</Link>
                        </div>
                    </div>
                    <div className="test-content-body-container">
                        <div className="test-content-body-header">
                            <div className="test-content-body-header-text">TEST 구분</div>
                            <div className="test-content-body-header-text">평균</div>
                            <div className="test-content-body-header-text">표준 편차</div>
                            <div className="test-content-body-header-text">응시자 수</div>
                            <div className="test-content-body-header-text">성적 등록 학생수</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Test