import React from 'react'
import {BsGoogle, BsFacebook} from 'react-icons/bs'
import firebase from 'firebase/compat/app';
import { auth } from '../firebase'
const Login = () => {
  return (
    <div className='bg-gradient-to-t from-gray-900 to-blue-950'>
        <div className='flex flex-col gap-5 text-white justify-center items-center h-screen'>
            <h2 className='text-3xl lg:text-6xl font-bold'>Welcome to Sandesh!</h2>
            <div className='bg-blue-700 mt-8 w-64 lg:w-96 lg:h-20 text-white rounded-xl flex flex-row justify-center items-center h-16 gap-2 hover:scale-105 duration-300'
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
            >
                <BsGoogle className='' /> Sign in with Google
            </div>
            <div className='bg-blue-950 text-white w-64 lg:w-96 lg:h-20 rounded-xl flex flex-row justify-center items-center h-16 gap-2 hover:scale-105 duration-300'
                onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
            >
                <BsFacebook /> Sign in with Facebook
            </div>
        </div>
    </div>
  )
}

export default Login