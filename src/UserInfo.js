import React, {useContext, useState} from "react";


const FormDisplayName=({displayname})=> {
    const [newDisplayName, setNewDisplayName]=useState(displayname)
const onChange= evt=> {
    setNewDisplayName(evt.target.value)

}
const save=()=> {
    if(newDisplayName !=='') {
        user.updateProfile({displayname:newDisplayName})
    }
}

  return   (
      <div>
             <input type='text' value={newDisplayName} onChange{...onChange} />
        <button onClick={save}>Save display name</button>
            
        </div>
    )}

const UserInfo=()=> {
    const auth= useContext(AuthContext)
const {displayname}=auth.user
const[alternativeDisplayName]=auth.user.mail.split('@')


if (auth.user===null) {
  return null
}


return (
    <>
    <p>Ola</p>
 <FormDisplayName user ={dn} user{...auth.user} />
 <button onClick={auth.signout}> Sair!</button>
  
    </>
)

}
export default UserInfo