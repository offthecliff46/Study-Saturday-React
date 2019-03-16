import React, { Component } from 'react';
import axios from 'axios';
import StudentList from './ StudentList'
import SingleStudent from './SingleStudent'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {}
    };
    this.selectStudent = this.selectStudent.bind(this)
  }

  async componentDidMount() {
    try {
        const { data } = await axios.get('/student');
        this.setState({ students: data });
      } catch (err) {
        console.error(err);
      }
  }

 

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
            {this.state.students.map(student => 
            <StudentList   key={student.id}  student={student} selectStudent={this.selectStudent}  />
            )}
          </tbody>
        </table>
        
       <div> 
       <br /><br /><br />

       {this.state.selectedStudent.id ? (
          <SingleStudent selectedStudent={this.state.selectedStudent}/> 
        ) : null}
             
           </div>
      </div>
    );
  }


  async selectStudent (studentId) {
    try {
    const res = await axios.get(`/student/${studentId}`)
    const selectedStudent = res.data
    this.setState({selectedStudent})
    } catch (err) {
      console.log(err)
    }
  }




}
