import React from 'react'

const InputScoreContent = ({name, grade, group}) => {
    return(
        <div className="isc-container">
            <div className="isc-serial-num">1</div>
            <div className="isc-studentinfo">{name}/{grade}/{group}</div>
            <input className="isc-scoreinput"/>
        </div>
    )
}

export default InputScoreContent