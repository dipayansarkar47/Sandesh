import React, {useRef, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import {auth} from '../firebase'

import {useAuth} from '../contexts/AuthContext'
import axios from 'axios'

import './App.css'
// import ChatHeader from './ChatHeader'
// import MsgForm from './MsgForm'

export default function Chats() {
  const didMountRef = useRef(false)
  const navigate = useNavigate();
  const {user} = useAuth();
  const [loading, setLoading] = useState(true);

  
  const handleLogout = async () => {
    await auth.signOut();
    navigate('/');
  }
  const getFile = async (url) => {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "userPhoto.jpg", {type: 'image/jpeg'});
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
  }, [user,navigate])

  if(!user || loading) return 'Loading...';

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>
          Sandesh
        </div>
        <div className='logout-tab' onClick={handleLogout}>
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
