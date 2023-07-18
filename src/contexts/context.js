//import createContext
import { useState, createContext } from "react";
import employeeList from '../models/employeeList'

//create and export global state management
export const AppContext=createContext();

// create react functional component
const AppContextProvider = (props) => {

    //sets the userState (creating state)
    const [employee, setEmployee] = useState(employeeList);
    const [current, setCurrent] = useState(employeeList[0])

    return (
        //gives state access to entire app
        <AppContext.Provider value={{
            // add the use states to the provider
            employee, 
            setEmployee,

            //add the second use state
            current,
            setCurrent
        }}> 
        {props.children}
        </AppContext.Provider>
    )
}

//export our function output
export default AppContextProvider;