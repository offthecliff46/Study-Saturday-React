
import React from 'react'



const StudentList = (props) => {
    const {student, selectStudent} = props

    return (
      <tr >
        <td>{student.fullName}</td>
        <td  onClick={() => selectStudent(student.id)}>Details</td>
      </tr>
      
    );
  

}

export default StudentList