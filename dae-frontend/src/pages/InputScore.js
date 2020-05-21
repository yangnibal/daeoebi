import React from 'react'
import Header from '../components/Header'
import InputScoreContent from '../components/InputScoreContent'
import './InputScore.scss'
import { observer, inject } from 'mobx-react'
import { action, observable } from 'mobx'

@inject('store')
@observer
class InputScore extends React.Component{

    @observable students = []

    @action handleChange = (e) => {
        const { store } = this.props
        var checkedStudents = store.checkedStudents
        checkedStudents.forEach(student => {
            if(student.name===e.target.name){
                student.inputValue = e.target.value
            }
        })
        store.checkedStudents = checkedStudents
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
    }

    render(){
        
        /*checkedStudents.map(student => student.inputValue="")
        store.checkedStudents = checkedStudents
        const checkedstudentlist = store.checkedStudents.map(checkedstudent => (
            <InputScoreContent
                grade={checkedstudent.grade}
                name={checkedstudent.name}
                group={checkedstudent.group}
                key={checkedstudent.id}
                serial_no={checkedStudents.findIndex(student => student.name===checkedstudent.name)+1}
                onChange={this.handleChange}
                value={checkedstudent.inputValue}
            />
        ))*/
        return(
            <div className="is-container">
                <Header/>
                <div className="is-content-container">
                    <div className="is-content-header">
                        <div className="is-content-header-text">NO.</div>
                        <div className="is-content-header-text">학생 구분</div>
                        <div className="is-content-header-text">내 점수</div>
                    </div>
                    <div className="is-content-body">
                        
                    </div>
                    <div className="is-content-footer">성적 등록</div>
                </div>
            </div>
        )
    }
}

export default InputScore