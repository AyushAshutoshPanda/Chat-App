import axios from 'axios';
import React,{useRef, useState} from 'react';
import { IoSend } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import store from '../redux/store';
import { setMessages } from '../redux/messageSlice';


const SendInput = () => {
  
  const [message, setmessage] = useState("")
  const dispatch = useDispatch()
   const {selectedUser} = useSelector(store => store.user) 
   const {messages} = useSelector(store=>store.message)
  const onsubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/message/send/${selectedUser?._id}`,{message}, {withCredentials:true})
      console.log(res);
      dispatch(setMessages([...messages, res?.data?.newMessage]))
      setmessage("")
      
    } catch (error) {
      console.log(error);
      
    }
    
  }
  
  return (
    <form onSubmit={onsubmitHandler} className="flex items-center gap-3 px-4 py-3 bg-[#1e3a3a] border-t border-slate-700 rounded-md">
      <input
      value={message}
      onChange={(e) => setmessage(e.target.value)}
        type="text"
        placeholder="Send a message..."
        className="flex-1 px-4 py-2 rounded-xl bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      <button
        type="submit"
        className="bg-cyan-600 p-2 rounded-full hover:bg-cyan-700 transition"
      >
        <IoSend className="text-white w-5 h-5" />
      </button>
    </form>
  );
};

export default SendInput;
