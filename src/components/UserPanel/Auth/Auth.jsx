import React, { useState } from 'react'
import { auth, googleProvider } from '../../../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup , signOut } from 'firebase/auth'

const Auth = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
    const signIn = async () =>{
      try{
        await createUserWithEmailAndPassword(auth,email,password);
      }catch(e){
        console.log(e);
      }
    }
    const signInWithGoogle = async () =>{
      try{
        await signInWithPopup(auth,googleProvider);
      }catch(e){
        console.log(e);
      }
    }
    const logout = async () =>{
      try{
        await signOut(auth);
      }catch(e){
        console.log(e);
      }
    }
  return (
    <div className='auth-form'>
        <input className='auth-input' type="text" placeholder='Email..' onChange={(e) => setEmail(e.target.value)}/>
        <input className='auth-input' type="password" placeholder='Password..' onChange={(e) => setPassword(e.target.value)}/>
        <button className='auth-btn' onClick={signIn}>Sign up</button>
        <button className='auth-btn' onClick={signInWithGoogle}>Sign up with Google</button>
        <button className='auth-btn' onClick={logout}>Logout</button>
    </div>
  )
}

export default Auth