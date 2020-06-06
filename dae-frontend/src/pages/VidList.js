import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'
import DropDown from '../components/DropDown'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import './VidList.scss'

@inject('store')
@observer
class VidList extends React.Component{
    render(){
        const { store } = this.props
        return(
            <div className="vid-container">
                <Header/>
                <div className="vid-sticky">
                    <div className="vid-header">
                        <div className="vid-header-left">    
                            <div className="vid-header-title">동영상 LIST</div>
                            <DropDown placeholder="과목" option={store.subject} className="test-content-dropdown-third" classNamePrefix="react-select" onChange={this.subjectChange} isClearable={this.isClearable} isSearchable={this.isSearchable}/>
                            <DropDown placeholder="학년" option={store.schoolyear} className="test-content-dropdown-first" classNamePrefix="react-select" onChange={this.schoolyearValueChange} isClearable={this.isClearable} isSearchable={this.isSearchable}/>
                            <DropDown placeholder="학기" option={store.semester} className="test-content-dropdown-second" classNamePrefix="react-select" onChange={this.semesterChange} isClearable={this.isClearable} isSearchable={this.isSearchable}/>
                            <div className="vid-header-search-btn" onClick={() => this.findTest(this.schoolyear, this.semester, this.subject)}>검색</div>
                        </div>
                        <div className="vid-header-right">
                            <Link to="/inf/vid/new" className="vid-register">동영상 추가</Link>
                        </div>
                    </div>
                    <div className="vid-body">
                        <div className="vid-body-header">
                            <div className="vid-body-header-text">동영상 이름</div>
                            <div className="vid-body-header-text">과목</div>
                            <div className="vid-body-header-text">추천 학년</div>
                            <div className="vid-body-header-text">그룹</div>
                            <div className="vid-body-header-text">동영상 재생 시간</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VidList