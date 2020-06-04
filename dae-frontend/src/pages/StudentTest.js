import React from 'react'
import './StudentTest.scss'
import { observer, inject } from 'mobx-react'
import Header from '../components/Header';
import axios from 'axios'
import DropDown from '../components/DropDown'
import { Link } from 'react-router-dom'
import { observable, action, toJS } from 'mobx'
import StudentTestContent from '../components/StudentTestContent'

@inject('store')
@observer
class StudentTest extends React.Component{

    @observable name = ""
    @observable scores = []
    @observable semester = ""
    @observable subject = ""
    @observable schoolyear = ""

    @action schoolyearValueChange = (e) => {
        this.schoolyear = e.value
    }
    @action semesterChange = (e) => {
        this.semester = e.value
    }
    @action subjectChange = (e) => {
        this.subject = e.value
    }
    @action Modify = () => {

    }
    @action Remove = () => {

    }
    @action findScore = (grade, test_type, subject) => {
        console.log(grade, test_type, subject)
        const id = localStorage.getItem("std_id")
        const ltoken = localStorage.getItem('token')
        const stoken = sessionStorage.getItem('token')
        var token = ""
        if(stoken===null){
            token = ltoken
        } else {
            token = stoken
        }
        axios.post("http://localhost:8000/scores/findscore/", ({
            grade: grade,
            test_type: test_type,
            subject: subject,
            id: id
        }), {
            headers: {
                Authorization: token
            }
        })
        .then(res => {
            const score = res.data['score']
            const test = res.data['test']
            for(var i in score){
                for(var j in test){
                    if(String(test[j]['id']) === score[i]['test']){
                        score[i].grade = test[j]['grade']
                        score[i].test_type = test[j]['test_type']
                        score[i].subject = test[j]['subject']
                        score[i].additional_info = test[j]['additional_info']
                    }
                }
            }
            this.scores = score
        })
        .catch(err => {
            console.log(err)
        })
    }

    componentDidMount(){
        this.name = localStorage.getItem("std_name")
        const id = localStorage.getItem("std_id")
        const ltoken = localStorage.getItem('token')
        const stoken = sessionStorage.getItem('token')
        var token = ""
        if(stoken===null){
            token = ltoken
        } else {
            token = stoken
        }
        axios.post("http://localhost:8000/scores/getstdscore/", ({
            id: id
        }), {
            headers: {
                Authorization: "Token " + token
            }
        })
        .then(res => {
            const score = res.data['score']
            const test = res.data['test']
            for(var i in score){
                for(var j in test){
                    if(String(test[j]['id']) === score[i]['test']){
                        score[i].grade = test[j]['grade']
                        score[i].test_type = test[j]['test_type']
                        score[i].subject = test[j]['subject']
                        score[i].additional_info = test[j]['additional_info']
                    }
                }
            }
            this.scores = score
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        const { store } = this.props
        const scorelist = this.scores.map(score => (
            <StudentTestContent
                test_type={score.test_type}
                grade={score.grade}
                school={score.additional_info}
                subject={score.subject}
                score={score.score}
                percent={score.percent}
                rank={score.rank}
                rating={score.rating}
                gradeModify={this.Modify}
                gradeRemove={this.Remove}
                key={score.id}
            />
        ))
        return(
            <div className="grade-container">
                <Header/>
                <div className="grade-content-container">
                    <div className="grade-content-header-container">
                        <div className="grade-content-header-left">
                            <div className="grade-content-title">{this.name} TEST 성적</div>
                            <DropDown placeholder="학년" option={store.schoolyear} className="grade-content-dropdown-first" classNamePrefix="react-select" onChange={this.schoolyearValueChange} isClearable={this.isClearable} isSearchable={this.isSearchable}/>
                            <DropDown placeholder="학기" option={store.semester} className="grade-content-dropdown-second" classNamePrefix="react-select" onChange={this.semesterChange} isClearable={this.isClearable} isSearchable={this.isSearchable}/>
                            <DropDown placeholder="과목" option={store.subject} className="grade-content-dropdown-third" classNamePrefix="react-select" onChange={this.subjectChange} isClearable={this.isClearable} isSearchable={this.isSearchable}/>
                            <div className="grade-content-search-btn" onClick={() => this.findScore(this.schoolyear, this.semester, this.subject)}>검색</div>
                        </div>
                        <div className="grade-content-header-right">
                        </div>
                    </div>
                    <div className="grade-content-body-container">
                        <div className="grade-content-body-header">
                            <div className="grade-content-body-header-text">TEST 구분</div>
                            <div className="grade-content-body-header-text">내점수</div>
                            <div className="grade-content-body-header-text">백분율</div>
                            <div className="grade-content-body-header-text">예상 등수</div>
                            <div className="grade-content-body-header-text">등급</div>
                        </div>
                        <div className="grade-content-body">
                            {scorelist}
                            <div className="grade-content-footer">
                                <Link to="/ac/test" className="grade-footer">TEST 목록으로 이동</Link>
                                <Link to="/ac/student" className="grade-footer">학생 목록으로 이동</Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentTest