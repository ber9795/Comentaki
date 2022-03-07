import React,{useEffect, useState} from "react";
import firebase from "./firebase";

export const AuthContext = React.createContext()



const UseGetUser=()=> {
    const[user,setUser]=useState(null)
    useEffect(()=> {

        firebase.auth().onAuthStateChanged(currentUser => {

    
    if(currentUser) {
        setUser(currentUser)
    } else {
        setUser (null)
    }
    

}) 
}, [])
return user
}


const useSigninUser =()=> {
    const[state, useStatus]=useState({
        error:'',
        succes:''
    })

    

    const SigninUser =(email,passwd) => {
        firebase
        .auth()
        .signinWithEmailandpasswor(email,passdw)
        return[state, SigninUser]

    }


const useCreateUser =()=> {
    const[state, useStatus]=useState({
        error:'',
        succes:''
    })



    const createUser =(email,passwd) => {
        firebase
        .auth()
        .createUserWithEmailandpasswor(email,passdw)
        .then(user=> {
            if (user) {
                setState({
                    ...state,
                    success:'ok'

                })
            }
        })
        }
        return[state, createUser]
    }



const signout =()=> {
    firebase
    .auth()
    .signout()
    .then(()=>
    console.log('signout')
    )
}
}
    export const AuthProvider=({ children })=> {
        const user = UseGetUser();
        const [createUserState, createUser] = useCreateUser();
        const [signinUserState, signinUser] = useSigninUser();
        return (
            <AuthContext.Provider value={{
                user,
                createUser: {
                    createUserState, createUser
                },
                signinUser: {
                    signinUser, signinUserState
                },
                signout
            }}>
                {children}
            </AuthContext.Provider>
        );
        }