import React from 'react'
import { BsGoogle, BsFacebook } from 'react-icons/bs'
import firebase from 'firebase/compat/app';
import { auth } from '../firebase'
const Login = () => {
    return (
        <div className='bg-gray-800'>
            <div className='flex flex-col gap-5 text-white justify-center items-center h-screen'>
                <h1 className="mb-2 font-mono text-4xl text-gray-100 md:text-6xl">
                    Welcome to <br className="block md:hidden" />
                    <span className="relative">
                        <span className="h-20 pt-2 font-bold overflow-x-hidden whitespace-nowrap text-brand-accent text-orange-500">
                            Sandesh <span className="text-3xl md:text-5xl">💬</span>
                        </span>
                        <span
                            className="absolute -bottom-0 left-0 -top-1 inline-block bg-gray-800 w-full animate-type will-change"
                        ></span>
                    </span>
                </h1>
                <div className='bg-blue-700 mt-8 w-64 lg:text-2xl lg:w-96 lg:h-20 text-white rounded-xl cursor-pointer flex flex-row justify-center items-center h-16 gap-2 hover:scale-105 duration-300'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <BsGoogle className='cursor-pointer' /> Sign in with Google
                </div>
                <div className='bg-blue-900 text-white w-64 lg:text-2xl cursor-pointer lg:w-96 lg:h-20 rounded-xl flex flex-row justify-center items-center h-16 gap-2 hover:scale-105 duration-300'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                    <BsFacebook className='cursor-pointer' /> Sign in with Facebook
                </div>
            </div>
        </div>
    )
}

export default Login