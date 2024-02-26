'use client'
import React, { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  // data
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  const onRegister = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setTimeout(() => {
        setError("Please complete all fields")
      }, 300);
      setTimeout(() => {
        setError('')
      },2000) 
    }
    

  };

  return (
    <main>
      <form className='flex flex-col gap-10' onSubmit={onRegister}>
        <h1 className='text-center text-3xl'>Register</h1>
        <input
          type='text'
          placeholder='Username'
          
          autoComplete='off'
          className='outline-none border p-1 border-black'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='email' // Use type="email" for better validation
          placeholder='Email'
          
          autoComplete='off'
          className='outline-none border p-1 border-black'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          
          autoComplete='off'
          className='outline-none border p-1 border-black'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <span className='bg-red-500 text-white p-2'>{error}</span>
        )}
        <button
          type='submit'
          className='bg-blue-500 hover:transition-all hover:bg-blue-600 p-2 text-white'
        >
          Register
        </button>
        <div>
            <h1>Already Have an Account?<Link href={'/login'} className='underline'> Login Here</Link></h1>
        </div>
      </form>
    </main>
  );
}
