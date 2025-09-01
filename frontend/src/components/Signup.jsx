import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import toast from "react-hot-toast"
import {useDispatch} from "react-redux"
const Signup = () => {

  const [user, setuser] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: ""
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const onSubmitHandler = async (e) => {
    e.preventDefault()
     try {
      const res = await axios.post(`http://localhost:8080/api/v1/user/register`,user,{
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials:true
      })
     if (res.data.success) {
      navigate("/login")
      toast.success(res.data.message)
     }
     } catch (error) {
      console.log(error);
      
     }


    
    setuser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: ""
    })
  }



  





  return (
    <div className='min-w-96 mx-auto '>


      <div className=" text-black bg-white/30 backdrop-blur-md rounded-xl shadow-lg w-full max-w-md p-8 border border-white/50 " >
        <h1 className='text-3xl font-bold text-center'>Register</h1>
        <form onSubmit={onSubmitHandler} action="">

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              value={user.fullName}
              onChange={(e) => setuser({ ...user, fullName: e.target.value })}
              className='p-2 rounded-lg  w-full  border-2 h-10' type="text" placeholder='Enter Full Name' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setuser({ ...user, username: e.target.value })}
              className='p-2 rounded-lg  w-full  border-2 h-10' type="text" placeholder='Enter Name' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setuser({ ...user, password: e.target.value })}
              className='p-2 rounded-lg  w-full  border-2 h-10' type="password" placeholder='Enter Password' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) => setuser({ ...user, confirmPassword: e.target.value })}
              className='p-2 rounded-lg  w-full  border-2 h-10' type="password" placeholder='Confirm your Password' />
          </div>


          <div className='flex items-center gap-3'>
            <div className='flex items-center gap-1'>
              <p className='text-lg '>Male</p>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={user.gender === "male"}
                onChange={(e) => setuser({ ...user, gender: e.target.value })}
                className="checkbox" />
            </div>
            <div className='flex items-center gap-1'>
              <p className='text-lg '>Female</p>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={user.gender === "female"}
                onChange={(e) => setuser({ ...user, gender: e.target.value })}
                className="checkbox" />
            </div>
          </div>


          <div>
            <p className='mb-2 text-center tex-bold text-lg'>Already Have Account?<Link to="/login" className=' underline  font-bold ' >Login</Link> </p>
          </div>
          <button  type="submit" className='bg-slate-400 w-96 rounded-full p-2 cursor-pointer'>Sign Up</button>
        </form>
      </div>


    </div>
  )
}

export default Signup
