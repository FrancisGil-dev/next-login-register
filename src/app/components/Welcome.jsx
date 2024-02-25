import React from 'react'
import Link from 'next/link'
export default function WelcomePage() {
  return (
    <main className='pl-9 flex flex-col gap-10'>
        <h1 className='text-4xl'>Welcome to My Login/Register App</h1>
        <div className='flex gap-10'>
            <Link href={'/login'} className='bg-blue-500 text-white p-2 text-xl w-[100px] text-center rounded-md hover:bg-blue-700 hover:transition-all' >Login</Link>
            <Link href={'/register'} className='bg-blue-500 text-white p-2 text-xl w-[100px] text-center rounded-md hover:bg-blue-700 hover:transition-all'>Register</Link>
        </div>
    </main>
  )
}
