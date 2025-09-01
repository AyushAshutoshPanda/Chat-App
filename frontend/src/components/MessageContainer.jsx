import React from 'react';
import SendInput from './SendInput';
import Messages from './Messages';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setSelectedUser } from '../redux/userSlice';

const MessageContainer = () => {
  const { selectedUser, authUser } = useSelector(store => store.user);
  const dispatch = useDispatch()
  useEffect(() => {
    return () => dispatch(setSelectedUser(null))


  }, [])

  return (
    <>
      {
        selectedUser ? (
          <div className="flex flex-col justify-between h-[550px] w-[550px] bg-[#0f172a] text-white rounded-md p-4">
            {/* Header */}
            <div className="bg-[#1e293b] hover:bg-[#334155] transition-colors duration-200 px-4 py-3 rounded-md flex items-center gap-3">
              <div className="avatar avatar-online">
                <div className="w-12">
                  <img src={selectedUser?.profilePhoto} alt="User" className="rounded-full" />
                </div>
              </div>
              <div>
                <p className="text-base font-medium">{selectedUser?.fullName}</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto my-4">
              <Messages />
            </div>

            {/* Send input */}
            <SendInput />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[550px] w-[550px] bg-[#0f172a] text-white rounded-md p-4">
            <h1 className="text-xl font-bold text-gray-400">Hi,{authUser?.fullName}</h1>
            <h1 className="text-lg text-gray-400">Let's start chatting 💬</h1>
          </div>
        )
      }
    </>
  );
};

export default MessageContainer;
