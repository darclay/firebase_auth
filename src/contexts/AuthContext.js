import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
const AuthContext = React.createContext()

export function useAuth(){
  return useContext(AuthContext)
}

//----------------------------------------

export function AuthProvider({children}) {
  //useState used to save the current user
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password){
    createUserWithEmailAndPassword(auth, email, password)
  }
  
  function login(email, password){
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout(){
    return signOut(auth) 
  }

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  },[])

  //value is using the user throughout the app
  const value = {
    currentUser,
    login,
    signup,
    logout
  }
//below this is what renders on the page
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}