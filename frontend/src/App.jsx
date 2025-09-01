import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage'
import Signup from './components/Signup'
import Login from './components/Login'
import { useSelector, useDispatch } from 'react-redux'
import store from './redux/store'
import io from "socket.io-client"
import { setSocket } from './redux/socketSlice'
import { setonlineUsers } from './redux/userSlice'



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/register",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  }
])

function App() {

  const { authUser } = useSelector(store => store.user)
  const { socket } = useSelector(store => store.socket)
  const dispatch = useDispatch()
 useEffect(() => {
  let socketInstance;

  if (authUser) {
    socketInstance = io('http://localhost:8080', {
      query: {
        userId: authUser._id
      }
    });
    dispatch(setSocket(socketInstance));

    socketInstance.on('getOnlineUsers', (onlineUsers) => {
      dispatch(setonlineUsers(onlineUsers));
    });
  }

  return () => {
    if (socketInstance) {
      socketInstance.disconnect(); // ✅ Use disconnect instead of close
      dispatch(setSocket(null));
      dispatch(setonlineUsers([])); // ✅ Clear online users
    }
  };
}, [authUser]);

  return (
    <>
      <div className='flex h-screen items-center p-4'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
