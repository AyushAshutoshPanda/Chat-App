import React from 'react';
import Message from './Message';
import UseGetMessages from '../hooks/UseGetMessages';
import { useSelector } from 'react-redux';
import store from '../redux/store';
import useGetRealTimeMessage from '../hooks/UseGetRealTimeMessage';

const Messages = () => {
  UseGetMessages();
  useGetRealTimeMessage();

  const { messages } = useSelector(store => store.message);
  if (!messages) return null;

  return (
    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3">
      {
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))
      }
    </div>
  );
};

export default Messages;
