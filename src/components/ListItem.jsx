import React, {useContext} from 'react'
import { AppContext } from '../contexts/context'

function ListItem(props) {

  let {setCurrent} = useContext(AppContext);

  return (
    <div className='employeeListItem' onClick={() => { //oncick then create a function inside it
      setCurrent(props.employee); //add the set current with props.employee which is our employee object
    }}>
                <div className='employeeListItemLeft'>
                    <img className='employeeDirectoryImg' src={props.employee.img} alt="" />
                </div>
                <div className='employeeListItemRight'>
                    <div className='leftName'>{props.employee.name}</div>
                    <div className='leftTitle'>{props.employee.title}</div>
                </div>
            </div>
  )
}

export default ListItem