import React from 'react'
import './NewStudent.scss'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'
import axios from 'axios'
import DropDown from '../components/DropDown'

@inject('store')
@observer
class NewStudent extends React.Component{

    @observable name = localStorage.getItem("std_name")
    @observable grade = ""
    @observable group = ""
    @observable isSearchable = true
    @observable isClearable = false

    @action schoolyearChange = (e) => {
        this.grade = e.value
        localStorage.setItem("grade", e.value)
    }

    @action groupChange = (e) => {
        this.group = e.value
    }

    @action init_data = (flag) => {
        if(flag){
            this.grade = ""
            this.group = ""
        }
        this.name = ""
    }
    @action handleChange = (e) => {
        const { name, value } = e.target
        this[name] = value
        localStorage.setItem("std_name", value)
    }
    @action addStudent = (name, grade, group, add_new) => {
        const ltoken = localStorage.getItem('token')
        const stoken = sessionStorage.getItem('token')
        var token = ""
        if(stoken===null){
            token = ltoken
        } else {
            token = stoken
        }
        if(name!=="" && grade!==""){
            if(group===""){
                axios.post("http://localhost:8000/students/", ({
                    name: name,
                    grade: grade
                }), {
                    headers: {
                        Authorization: "Token " + token
                    }
                })
                .then(res => {
                    if(add_new===false){
                        this.init_data()
                        this.props.history.push("/ac/student")
                    } else {
                        this.init_data()
                    }
                })
                .catch(err => {
                    console.log(err)
                })
            } else {
                axios.post("http://localhost:8000/students/", ({
                    name: name,
                    grade: grade,
                    group: group
                }), {
                    headers: {
                        Authorization: "Token " + token
                    }
                })
                .then(res => {
                    if(add_new===false){
                        this.init_data(true)
                        this.props.history.push("/ac/student")
                    } else {
                        this.init_data(false)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
            }
        } else {
            alert("이름이나 학년을 입력해 주시기 바랍니다.")
        }
    }

    @action getGroup = () => {
        const { store } = this.props
        const ltoken = localStorage.getItem('token')
        const stoken = sessionStorage.getItem('token')
        var token = ""
        if(stoken===null){
            token = ltoken
        } else {
            token = stoken
        }
        const group = []
        axios.get("http://localhost:8000/groups/getmygroup/", {
            headers: {
                Authorization: "Token " + token
            }
        })
        .then(res => {
            for(var i in res.data){
                group.push({value: res.data[i]['name'], label: res.data[i]['name']})
            }
            store.group = group
        })
        .catch(err => {
            console.log(err)
        })
    }

    componentDidMount(){
        this.getGroup()
    }

    render(){
        const { store } = this.props
        return(
            <div className="newstudent-container">
                <Header/>
                <div className="newstudent-content-container">
                    <div className="newstudent-content-title">학생 기본 정보 입력</div>
                    <input name="name" value={this.name} onChange={this.handleChange} className="newstudent-content-input" placeholder="학생 이름"/>
                    <DropDown placeholder="학년 선택" option={store.schoolyear} className="newstudent-content-dropdown" classNamePrefix="react-select" onChange={this.schoolyearChange} isClearable={this.isClearable} isSearchable={this.isSearchable}/>
                    <DropDown placeholder="그룹 선택" option={store.group} className="newstudent-content-dropdown" classNamePrefix="react-select" onChange={this.groupChange} isClearable={this.isClearable} isSearchable={this.isSearchable}/>
                    <div className="newstudent-content-group-add-container">
                        <Link to="/ac/group/new" className="newstudent-content-group-add">그룹 추가</Link>
                    </div>
                    <div className="newstudent-content-btn-container">
                        <div className="newstudent-content-btn" onClick={() => this.addStudent(this.name, this.grade, this.group, false)}>등록</div>
                        <div className="newstudent-content-btn" onClick={() => this.addStudent(this.name, this.grade, this.group, true)}>학생 추가 등록</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewStudent