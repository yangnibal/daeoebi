import React from 'react'

const StudentContent = ({name, grade, group, id, studentModify, studentRemove, checked, onChange}) => {
    return (
        <div className="studentcontent-container">
            <input checked={checked} onChange={onChange} name="isChecked" type="checkbox" className="studentcontent-checkbox" id="check"/>
            <label htmlFor="check"/>
            <div className="studentcontent-name">{name}</div>
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