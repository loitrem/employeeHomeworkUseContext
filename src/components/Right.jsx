import React, {useContext} from 'react'
import Employee from './Employee'
import { AppContext } from '../contexts/context';

function Right() {

  //brings in current state
  let {current}=useContext(AppContext);

  return (
    <div className='rightWrapper'>
    
        <div className='employeeHeader'>Employee</div>
        <div className='employeeInfoWrapper'>
            <div className='employeeWrapper'>
                <Employee employee={current}/>
            </div>
            <div className='contactListWrapper'>
              <div className='contactList'>
                  <div className='office'>
                    <div className='officeTop'>Call Office </div>
                    <div className='officeBottom'>{current.contact.office}</div>
                  </div>

                  <div className='mobile'>
                    <div className='mobileTop'>Call Mobile </div>
                    <div className='mobileBottom'>{current.contact.mobile}</div>
                  </div>

                  <div className='sms'>
                    <div className='smsTop'>SMS </div>
                    <div className='smsBottom'>{current.contact.sms}</div>
                  </div>

                  <div className='email'>
                    <div className='emailTop'>Email</div>
                    <div className='emailBottom'>{current.contact.email}</div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Right