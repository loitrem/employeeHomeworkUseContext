import React from 'react'
import ListItem from './ListItem'

function EmployeeList(props) {
  return (
    <div className='employeeList'>
      <ListItem employee={props.employee}/>
    </div>
  )
}

export default EmployeeList