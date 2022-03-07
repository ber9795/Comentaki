import React, {useState, useEffect} from 'react'
import './App.css';
import NewComment from './NewComment'
import firebase from './firebase'
import Comments from './Comments'
import {AuthContext} from './auth'
import UserInfo from './UserInfo'
import SigninUser from './SigninUser';

firebase.auth().createUserWithEmailAndPassword('ber9795@gmail.com','abc123')
firebase.auth().onAuthStateChanged(user => {
  if(user) {
    user.updateProfile({displayName: 'Bernardo Acevedo'})
  }
}
  )





function App() {

  return (
    <AuthContext.Provider value={''}>
    <div>

      <NewComments />
      <Comments />
      <SigninUser />
      <UserInfo />
</div>
</AuthContext.Provider>

  )
    }
export default App;
