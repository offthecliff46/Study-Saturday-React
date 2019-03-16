import React from 'react'




const SingleStudent =  (props) => {
  const {selectedStudent} = props
  const  gradeArray = selectedStudent.tests
  const allGradesSum = gradeArray.map(grade => {return grade.grade}).reduce ((x,y)=>x+y)
  const avgGrade = Math.round(allGradesSum / gradeArray.length)


  return (
    <div>
      <h2>{selectedStudent.fullName}</h2>
      <h2>Average Grade: {avgGrade}%</h2>

      <table>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Grade</th>
                    </tr>
                </thead>
          <tbody> 
{ 
    selectedStudent.tests.map (test => {
      return (
       <tr key={test.id}> 
         <td>{test.subject}</td>
         <td>{test.grade}%</td>
       </tr> 
      )
    }
    ) 
}
          </tbody>
        </table>
      </div>
  )
}

export default SingleStudent

