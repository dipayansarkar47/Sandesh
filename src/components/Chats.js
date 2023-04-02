import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../firebase'

import { useAuth } from '../contexts/AuthContext'
import axios from 'axios'

import './App.css'
// import ChatHeader from './ChatHeader'
// import MsgForm from './MsgForm'

export default function Chats() {
  const didMountRef = useRef(false)
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);


  const handleLogout = async () => {
    await auth.signOut();
    navigate('/');
  }
  const getFile = async (url) => {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: 'image/jpeg' });
  }
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true

      if (!user || user === null) {
        navigate("/")
        return
      }
      axios.get('https://api.chatengine.io/users/me', {
        headers: {
          "project-id": "8de27bc6-27c8-4773-bbec-e8cbf5da6b33",
          "user-name": user.email,
          "user-secret": user.uid
        }
      }).then(() => {
        setLoading(false);
      }).catch(() => {
        let formdata = new FormData();
        formdata.append('email', user.email);
        formdata.append('username', user.email);
        formdata.append('secret', user.uid);
        getFile(user.photoURL).then((avatar) => {
          formdata.append('avatar', avatar, avatar.name);
          axios.post('https://api.chatengine.io/users/', formdata, {
            headers: {
              "private-key": "26bb0c87-5a37-4b2c-8104-51c22dbb6ff0"
            }
          }).then(() => {
            setLoading(false);
          }).catch((error) => {
            console.log(error);
          })
        }
        )
      })
    }
  }, [user, navigate])

  if (!user || loading) return (
    <div class="flex justify-center items-center text-center h-screen">
      <div role="status">
        <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>

  );

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='absolute text-4xl justify-center flex items-center text-white m-3 ml-3'>
          Sandesh
        </div>
        <div className='absolute text-xl justify-end flex items-end text-end text-white m-3 right-3 top-1 cursor-pointer' onClick={handleLogout}>
          Logout
        </div>
      </div>
      <ChatEngine
        height='calc(100vh - 66px)'
        projectID="8de27bc6-27c8-4773-bbec-e8cbf5da6b33"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  )
}
