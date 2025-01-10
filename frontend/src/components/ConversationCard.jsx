import React from 'react';
import Message from './Message';

const ConversationCard = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 px-4">
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </div>
  );
};

export default ConversationCard;
