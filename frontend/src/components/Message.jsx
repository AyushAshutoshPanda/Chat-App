import React, { useRef, useEffect } from 'react'
import { useSelector } from "react-redux"
const Message = ({ message }) => {
  const scroll = useRef()
  const { authUser,selectedUser } = useSelector(store => store.user)
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" })
  }, [message])


  return (
    <div>
      <div ref={scroll} className={`chat ${authUser?._id === message?.senderId ? 'chat-end' : 'chat-start'} `}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="User"
              src={message?.senderId === authUser?._id ? authUser?.profilePhoto : selectedUser?.profilePhoto}
            />
          </div>
        </div>
        <div className="chat-header">
          <time className="text-xs opacity-70 text-gray-400">12:45</time>
        </div>
        <div className="chat-bubble bg-[#2a2e35] text-white shadow-md">
          {
            message?.message
          }
        </div>
      </div>
    </div>
  )
}

export default Message
