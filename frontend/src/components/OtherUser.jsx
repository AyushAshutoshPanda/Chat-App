import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice'

const OtherUser = ({ user }) => {
  const dispatch = useDispatch()
  const { selectedUser, onlineUsers } = useSelector((store) => store.user)

  const isOnline = onlineUsers?.includes(user._id)

  const selectedUserHandler = () => {
    dispatch(setSelectedUser(user))
  }

  return (
    <>
      <div
        onClick={selectedUserHandler}
        className={`${selectedUser?._id === user?._id ? "bg-sky-500/20" : ""
          } flex items-center gap-3 hover:bg-blue-600/20 transition-colors duration-200 px-3 py-2 rounded cursor-pointer`}
      >
        <div className="avatar">
          <div className={`w-12 rounded-full ${isOnline ? 'ring ring-primary ring-offset-base-100 ring-offset-2' : ''}`}>
            <img src={user?.profilePhoto || "https://i.pravatar.cc/300"} alt="User" />
          </div>
          {isOnline && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          )}
        </div>


        {/* Name */}
        <div>
          <p className="text-white font-medium">{user?.fullName}</p>
        </div>
      </div>


      <div className="border-t border-slate-700 my-2 mx-1" />
    </>
  )
}

export default OtherUser
