import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux"
import { setMessages } from '../redux/messageSlice'

const UseGetMessages = () => {
  const { selectedUser } = useSelector(store => store.user)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchMessages = async () => {
      try {
    
        dispatch(setMessages([]))

        if (!selectedUser?._id) return;

        axios.defaults.withCredentials = true
        const res = await axios.get(`http://localhost:8080/api/v1/message/${selectedUser._id}`)

        
        dispatch(setMessages(res.data))
      } catch (error) {
        console.log("Error fetching messages:", error)
      }
    }

    fetchMessages()
  }, [selectedUser]) 
}

export default UseGetMessages
