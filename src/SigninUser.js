import React, {useContext, useState} from "react";
import { AuthContext } from "./auth";

const SigninUser=()=> {

    const auth= useContext(AuthContext)
    const[form, setForm]= useState({email:'', passwd:''})
const onChange= campo=>evt=>{
    setForm({
    ...form,
    [campo]:evt.target.value
    })
}

    return (
        <>
        <h3>Entrar na sua Conta:</h3>

{
    auth.SigninUser.signInUserState.error !=='' &&
    <p>{auth.SigninUser.signInUserState.error}</p>
}
        <input type='text' placeholder='Seu Email' value={form.email} onChange={onChange('email')}/>
        <input type='text' placeholder='Seu Senha' value={form.passwd} onChange={onChange('passwd')}/>
        <button onClick={()=> {

            auth.SigninUser.SigninUser(form.email, form.passwd)
            
        
        }}>Entrar</button>
    
        </>
    
    )
     
    }

export default SigninUser