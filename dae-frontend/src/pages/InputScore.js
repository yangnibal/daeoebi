import React from 'react'
import Header from '../components/Header'
import InputScoreContent from '../components/InputScoreContent'
import './InputScore.scss'
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class InputScore extends React.Component{
    render(){
        const { store } = this.props
        const checkedstudentlist = store.checkedStudents.map(checkedstudent => (
            <InputScoreContent
                grade={checkedstudent.grade}
                name={checkedstudent.name}
                group={checkedstudent.group}
                key={checkedstudent.id}
            />
        ))
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
                        {checkedstudentlist}
                    </div>
                    <div className="is-content-footer">성적 등록</div>
                </div>
            </div>
        )
    }
}

export default InputScore