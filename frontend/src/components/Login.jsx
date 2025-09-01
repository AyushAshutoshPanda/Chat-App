import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"
import {useDispatch} from "react-redux"
import { setAuthUser } from '../redux/userSlice'

const Login = () => {


  const [user, setuser] = useState({
    
    username: "",
    password: "",
  
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmitHandler = async (e) => {
    e.preventDefault()
 try {
      const res = await axios.post(`http://localhost:8080/api/v1/user/login`,user,{
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials:true
      })
    toast.success("Login successful");
      navigate("/")
  dispatch(setAuthUser(res.data))   
  
     
     } catch (error) {
      toast.error(error.response.data.message)
      console.log(error);
      
     }


    setuser({
     
      username: "",
      password: "",
     
    })
  }


  
  
  
  return (
    <div className='min-w-96 mx-auto '>


      <div className=" text-black bg-white/30 backdrop-blur-md rounded-xl shadow-lg w-full max-w-md p-8 border border-white/50 " >
        <h1 className='text-3xl font-bold text-center'>Login</h1>
        <form onSubmit={onSubmitHandler} action="">

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>UserName</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setuser({
                ...user,username:e.target.value
              })
              }
            className='p-2 rounded-lg  w-full  border-2 h-10' type="text" placeholder='Enter Name' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
             value={user.password}
              onChange={(e) => setuser({
                ...user,password:e.target.value
              })
              }
            className='p-2 rounded-lg  w-full  border-2 h-10' type="password" placeholder='Enter Password' />
          </div>

             <div>
              <p className='mb-2 text-center tex-bold text-lg'>Don,t Have an Account?<Link to ="/register"  className=' underline  font-bold ' >Register</Link> </p>
             </div>
             <button type="submit"  className='bg-slate-400 w-96 rounded-full p-2 cursor-pointer'>Login</button>
        </form>
      </div>


    </div>
  )
}

export default Login
