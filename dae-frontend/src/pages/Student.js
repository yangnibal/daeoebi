import React from 'react'
import './Student.scss'
import Header from '../components/Header';
import { Link } from 'react-router-dom'
import DropDown from '../components/DropDown'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'

@inject('store')
@observer 
class Student extends React.Component{

    @observable schoolyear = ""
    @observable group = ""

    @action schoolyearChange = (e) => {
        this.schoolyear = e.value
    }
    @action groupChange = (e) => {
        this.group = e.value
    }

    render(){
        const { store } = this.props;
        return(
            <div className="student-container">
                <Header/>
                <div className="student-content-container">
                    <div className="student-content-header-container">
                        <div className="student-content-header-left">
                            <div className="student-content-title">학생 목록</div>
                            <DropDown placeholder="학년" option={store.schoolyear} className="student-content-dropdown-first" classNamePrefix="react-select" onChange={this.schoolyearChange} isClearable={this.isClearable} isSearchable={this.isSearchable}/>
                            <DropDown placeholder="그룹" option={store.group} className="student-content-dropdown-second" classNamePrefix="react-select" onChange={this.groupChange} isClearable={this.isClearable} isSearchable={this.isSearchable}/>
                            <div className="student-content-search-btn">검색</div>
                        </div>
                        <div className="student-content-header-right">
                            <Link to="/academy/student/new" className="student-register">학생 등록</Link>
                        </div>
                    </div>
                    <div className="student-content-body-container">
                        <div className="student-content-body-header">
                            <div className="student-content-body-header-text">이름</div>
                            <div className="student-content-body-header-text">학년</div>
                            <div className="student-content-body-header-text">그룹</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Student