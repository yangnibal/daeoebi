import React from 'react'

const StudentContent = ({name, grade, group, id, studentModify, studentRemove, checked, onChange, testChange}) => {
    return (
        <div className="studentcontent-container">
            <div className={checked===false ? "studentcontent-checkbox" : "studentcontent-checkbox checked"} onClick={onChange} name={name} id={id}/>
            <div className="studentcontent-name" onClick={testChange}>{name}</div>
            <div className="studentcontent-grade">{grade}</div>
            <div className="studentcontent-group">{group}</div>
            <div className="studentcontent-modify-remove">
                <span className="studentcontent-modify" onClick={studentModify}>수정</span>/
                <span className="studentcontent-remove" onClick={studentRemove}>삭제</span>
            </div>
        </div>
    )
}

export default StudentContent