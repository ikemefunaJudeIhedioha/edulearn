import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <header className='h-fit py-6 px-10 shadow-sm'>
                <nav className='flex items-center justify-between'>
                    <div>
                        <Image height={150} width={150} alt='logo' src='/logo.svg' />
                    </div>
                    <div className='flex gap-6 text-lg items-center'>
                        <Link href='/sign-in' className='text-red-400 text-bold'>Sign In</Link>
                        <Link href='/sign-Up' className='bg-red-400 text-white p-3 rounded-lg hover:bg-transparent hover:text-red-400 hover:font-bold transition-all duration-200 ease-in-out'>Sign Up</Link>
                    </div>
                </nav>
            </header>

            <main style={{ backgroundImage: `url("https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")` }} className='h-screen bg-cover '>

            </main>
        </div>
    )
}

export default page