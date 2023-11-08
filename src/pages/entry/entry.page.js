import react from "react"
import React, { useState } from "react";
import './entry.style.css'
import {LoginForm} from "../../components/login/login.comp";
import {ResetPassword} from "../../components/password_reset/PasswordReset.comp";
export const Entry = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [frmLoad,setfrmLoad] = useState('login')
    const handleOnchange = e => {
        const {name , value} = e.target;
        switch(name) {
            case 'email':
                setEmail(value)
                break
            case 'password':
                setPassword(value)
                break
            default :
                break;
        }
        
    }
    const handleOnSubmit = e => {
        e.preventDefault() // this function is t prevent the page from refreshing
        if(!email || !password){
              return  alert('please fill up the form!')
              //todo call api to submit the form !
        }
    }
    const handleOnResetSubmit = e => {
        e.preventDefault()
             
            if(!email ){
                return  alert('please enter you email!')
                //todo call api to submit the form !
          }
    }
    const frmSwitcher = frmType =>{
            setfrmLoad(frmType);
    }
    return(
        <div className="entry-page bg-info">
            
           < div className="jumbotron">
            {frmLoad === "login" && (<LoginForm   
                        handleOnchange ={handleOnchange}
                        handleOnSubmit = {handleOnSubmit}
                        frmSwitcher = {frmSwitcher}
                        email={email}
                        pass = {password}
            />)}
            {frmLoad === "reset" && (<ResetPassword   
                        handleOnchange ={handleOnchange}
                        handleOnSubmit = {handleOnResetSubmit}
                        frmSwitcher = {frmSwitcher}
                        email={email}
            />)}
           
            
            </div> 
            
            
        </div>
    )
}