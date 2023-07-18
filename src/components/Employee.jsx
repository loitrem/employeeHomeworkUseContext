import React from 'react'

function Employee(props) {
  return (
    <div className='employee'>
        <div className='employeeLeft'>
            <img className='employeeLeftImg' src={props.employee.img} alt="" />
        </div>
        <div className='employeeRight'>
            <div className='employeeName'>{props.employee.name}</div>
            <div className='employeeTitle'>{props.employee.title}</div>
        </div>
    </div>
  )
}

export default Employee