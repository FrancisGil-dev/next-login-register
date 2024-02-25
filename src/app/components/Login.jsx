"use client"
import React, { useState } from 'react'
import Link from 'next/link'


export default function Login() {

  // data
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');

  const onLogin = (e) =>  {
    // prevent from loading
    e.preventDefault(); 

    
  }
  return ( 
    <main>
        <form className='flex flex-col gap-10' onSubmit={onLogin} method='GET'>
            <h1 className='text-center text-3xl'>Login</h1>
            <input type="text" placeholder='Email' required autoComplete='off' 
            className='outline-none border p-1 border-black'
            />
            <input type="password" placeholder='Password' required autoComplete='off' 
            className='outline-none border p-1 border-black'
            />
            <button type='submit' className='bg-blue-500 hover:transition-all hover:bg-blue-600 p-2 text-white'
            onSubmit={onLogin}>Login</button>
            <h1>Doesn't Have an Account? <Link href={'/register'} className='underline'>Register Here</Link></h1>
        </form>
    </main>
  )
}
