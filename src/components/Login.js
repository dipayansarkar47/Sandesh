import React from 'react'
import { BsGoogle, BsFacebook } from 'react-icons/bs'
import firebase from 'firebase/compat/app';
import { auth } from '../firebase'
const Login = () => {
    return (
        <div className='bg-black'>
            <div className='flex flex-col gap-5 text-center text-white justify-center items-center h-screen'>
                <div class="px-8 py-10 -mt-14">
                    <div class="grid gap-8 items-start justify-center">
                        <div class="relative group">
                            <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                            <button class="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                                <span class="flex items-center space-x-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-600 -rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                    <span class="pr-6 text-gray-100">Beta v.1.2</span>
                                </span>
                                <span class="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200"><a href="https://github.com/dipayansarkar47/Sandesh"> See what's new &rarr;</a></span>
                            </button>
                        </div>
                    </div>
                </div>


                <h1 className="mb-4  font-mono text-4xl text-gray-100 md:text-6xl">
                    Bhejo Apna <br className="block md:hidden" />
                    <span className="relative space-y-4">
                        <span className="h-20  pt-2 font-bold overflow-x-hidden whitespace-nowrap text-brand-accent text-center text-pink-700">
                            Sandesh <span className="text-3xl md:text-5xl">💬</span>
                        </span>
                        <span
                            className="absolute -bottom-0 left-0 -top-1 inline-block bg-black w-full animate-type will-change"
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