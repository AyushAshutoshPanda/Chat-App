import React from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'
const HomePage = () => {
  return (
    <div className="flex h-[550px] rounded-lg overflow-hidden bg-gradient-to-r from-[#1e293b] via-[#475569] to-[#475569]">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};


export default HomePage
