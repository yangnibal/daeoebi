import React from 'react'
import './Student.scss'
import Header from '../components/Header';
import { Link } from 'react-router-dom'
import DropDown from '../components/DropDown'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'
import axios from 'axios'
import StudentContent from '../components/StudentContent'

@inject('store')
@observer 
class Student extends React.Component{

    @observable schoolyear = ""
    @observable group = ""
    @observable students = []
    @observable checkall = false
    @observable check = false

    @action schoolyearChange = (e) => {
        this.schoolyear = e.value
    }
    @action groupChange = (e) => {
        this.group = e.value
    }
    @action handleToggle = (e) => {
        var students = this.students
        students.forEach(student => {
            if(student.id===e.target.id){
                /*if(student.isChecked===false){
                    e.target.className="studentcontent-checkbox checked"
                } else {
                    e.target.className="studentcontent-checkbox"
                }*/
                student.isChecked = !student.isChecked
                console.log(student.isChecked)
            }
        })
        this.students = students
    }
    @action handleAllCheckboxChange = (e) => {
        const { name, checked } = e.target
        this[name] = checked
        var students = this.students
        students.forEach(student => student.isChecked = e.target.checked)
        this.students = students
        console.log(this.students)
    }
    @action studentModify = (name, grade, group, id) => {
        const { store } = this.props
        store.studentinfo = { name: name, grade: grade, group: group, id: id }
        this.props.history.push(`/academy/student/${id}/update`)
    }
    @action studentRemove = (id) => {
        const ltoken = localStorage.getItem('token')
        const stoken = sessionStorage.getItem('token')
        var token = ""
        if(stoken===null){
            token = ltoken
        } else {
            token = stoken
        }
        axios.delete("http://localhost:8000/students/" + id + "/", {
            headers: {
                Authorization: "Token " + token
            }
        })
        .then(res => {
            window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })
    }
    @action gradeRegister = () => {
        const ltoken = localStorage.getItem('token')
        const stoken = sessionStorage.getItem('token')
        var token = ""
        if(stoken===null){
            token = ltoken
        } else {
            token = stoken
        }
        var students = this.students
        const checkedStudents = students.filter(student => student.isChecked===true)
        axios.post("http://localhost:8000/checkedstudents/postdatalist/", ({
            data: checkedStudents
        }), {
            headers: {
                Authorization: "Token" + token
            }
        })
        .then(res => {
            console.log(res)
            this.props.history.push("/academy/student/inputscore")
        })
        .catch(err => {
            console.log(err)
        })
        /*checkedStudents.forEach(student => {
            axios.post("http://localhost:8000/checkedstudents/", ({
                name: student.name,
                grade: student.grade,
                group: student.group
            }), {
                headers: {
                    Authorization: "Token" + token
                }
            })
            .then(res => {})
            .catch(err => {})
        })
        .then(res => {
            this.props.history.push("/academy/student/inputscore")
        })
        setTimeout(() => {
            this.props.history.push("/academy/student/inputscore")
        }, 1000)*/
    }
    @action testChange = (e) => {
        console.log(e.target)
    }

    componentDidMount(){
        const ltoken = localStorage.getItem('token')
        const stoken = sessionStorage.getItem('token')
        var token = ""
        if(stoken===null){
            token = ltoken
        } else {
            token = stoken
        }
        axios.get("http://localhost:8000/students/getmystd/", {
            headers: {
                Authorization: "Token " + token
            }
        })
        .then(res => {
            this.students = res.data
            var students = this.students
            students.map(student => student.isChecked=false)
            this.students = students
            console.log(this.students)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        const { store } = this.props;
        const studentlist = this.students.map(student => (
            <StudentContent
                name={student.name}
                grade={student.grade}
                group={student.group}
                id={student.id}
                key={student.id}
                studentModify={() => this.studentModify(student.name, student.grade, student.group, student.id)}
                studentRemove={() => this.studentRemove(student.id)}
                checked={student.isChecked}
                onChange={this.handleToggle}
                testChange={this.testChange}
            />
        ))
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
                            <input value={this.checkall} name="checkall" onChange={this.handleAllCheckboxChange} type="checkbox" className="student-content-body-header-btn" id="btn"/>
                            <label htmlFor="btn"/>
                            <div className="student-content-body-header-text">이름</div>
                            <div className="student-content-body-header-text">학년</div>
                            <div className="student-content-body-header-text">그룹</div>
                        </div>
                        <div className="student-content-body">
                            {studentlist}
                        </div>
                        <div className="student-content-body-footer" onClick={() => this.gradeRegister()}>선택 학생 성적 등록</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Student