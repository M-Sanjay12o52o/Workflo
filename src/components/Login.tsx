import Link from 'next/link'
import { FC } from 'react'

interface LoginProps {

}

const Login: FC<LoginProps> = ({ }) => {

    return <div className='relative w-screen h-screen bg-gradient-to-b from-white to-custom-purple'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 bg-white rounded-lg shadow-lg sm:max-w-xl'>
            <h1
                className='font-bold text-black text-4xl text-center m-6 mt-6'>
                Welcome to <span className='text-button-purple'>Workflo</span>!
            </h1>
            <input className='bg-slate-200 rounded-lg block w-full p-2 mt-4' type="text" placeholder='jgardner@gmail.com' />
            <input className='bg-slate-200 rounded-lg block w-full p-2 mt-4 mb-4' type="text" placeholder='********' />
            <button className='w-full p-2 text-white bg-button-purple rounded-lg'>Login</button>
            <p className='text-gray-600 text-center m-2'>
                Don&apos;t have an account?
                <Link href={'/signup'} className='w-full p-2 text-blue-400  rounded-lg'>Create a new account</Link>
            </p>
        </div>
    </div>
}

export default Login