import React from 'react'
import './Grade.scss'
import Header from '../components/Header';
import { Link } from 'react-router-dom'
import DropDown from '../components/DropDown'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'

@inject('store')
@observer
class Grade extends React.Component{

    @observable schoolyear = ""
    @observable group = ""

    @action schoolyearChange = (e) => {
        this.schoolyear = e.value
    }
    @action groupChange = (e) => {
        this.group = e.value
    }

    render(){
        const { store } = this.props
        return(
            <div className="grade-container">
                <Header/>
                <div className="grade-content-container">
                    <div className="grade-content-header-container">
                        <div className="grade-content-header-left">
                            <div className="grade-content-title">학생 성적표 목록</div>
                            <DropDown placeholder="학년" option={store.schoolyear} className="grade-content-dropdown-first" classNamePrefix="react-select" onChange={this.schoolyearChange} isClearable={this.isClearable} isSearchable={this.isSearchable}/>
                            <DropDown placeholder="그룹" option={store.group} className="grade-content-dropdown-second" classNamePrefix="react-select" onChange={this.groupChange} isClearable={this.isClearable} isSearchable={this.isSearchable}/>
                            <div className="grade-content-search-btn">검색</div>
                        </div>
                        <div className="grade-content-header-right">
                            <Link to="/academy/grade/new" className="grade-register">성적 등록</Link>
                        </div>
                    </div>
                    <div className="grade-content-body-container">
                        <div className="grade-content-body-header">
                            <div className="grade-content-body-header-text">학생 구분</div>
                            <div className="grade-content-body-header-text">내점수</div>
                            <div className="grade-content-body-header-text">백분율</div>
                            <div className="grade-content-body-header-text">예상 등수</div>
                            <div className="grade-content-body-header-text">등급</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Grade