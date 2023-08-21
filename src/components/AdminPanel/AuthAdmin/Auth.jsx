import React, { useState } from 'react'
import AdminPage from '../AdminPage';


const Auth = () => {
  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const administrators = [
    {
      email: '1',
      password: '1'
    }
  ]
  const signIn = (e) => {
    e.preventDefault()
    administrators.forEach((el) => {
      if (el.email === email && el.password === password) {
        setActive(true)
        setError(false)
      }
      else {
        setError(true)
        setActive(false)
      }
    }
    )
  }
  return (
    active ?
      <AdminPage setActive={setActive}/>
      :
      <form className='auth-form' >
        <input className='auth-input' type="text" placeholder='Email..' onChange={(e) => setEmail(e.target.value)} />
        <input className='auth-input' type="password" placeholder='Password..' onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' className='auth-btn' onClick={signIn}>Sign in</button>
        {error && !active ?
          <div>*логин или пароль введены не верно</div>
          :
          <></>
        }
      </form>

  )
}

export default Auth