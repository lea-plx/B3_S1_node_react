import { useEffect, useState } from "react";
import { StudentData } from "../StudentData/StudentData";
import { getStudentsData } from "../../../Controlleur/get_students";


export function StudentsList (props) {

    const dataStudents = props.dataStudent

    if (!dataStudents){
        return (
            <div className="listStyle">
                chargement...
            </div>
        )
    }
    
    return (
        <div className="listStyle">
            {dataStudents.map((elmStudent, idx) => {
                return <StudentData togglePopupStudent={props.togglePopupStudent} setPopupStudentId={props.setPopupStudentId} setStudentIdx={props.setStudentIdx} data={elmStudent} setPopupStudentData={props.setPopupStudentData} idx={idx} reloadDataStudent={props.reloadDataStudent}/>
            })}
        </div>
    )
}