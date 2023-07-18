//import the useContext to be able to use state and import AppContext
import React, {useContext} from 'react'
import EmployeeList from './EmployeeList'
import { AppContext } from '../contexts/context';

function Left() {
  let count=0;

  //pulling employee state from appContext
  let {employee}=useContext(AppContext);

  return (
    <div className='leftWrapper'>

        <div className='employeeDirectory'>Employee Directory</div>
        <div className='searchBarWrapper'>
            <input className='searchBar' type="text" />
        </div>
        {employee.map((list)=> {
          count++;
            return (
                <EmployeeList key={count} employee={list}/>
            )  
        })}
    </div>
  )
}

export default Left