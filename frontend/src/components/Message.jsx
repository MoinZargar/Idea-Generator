import React from 'react';

const Message = ({text, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-lg p-4 ${
          isUser
            ? 'bg-blue-500 text-white'
            : 'bg-white border border-gray-200'
        }`}
      >
        {text}
      </div>
    </div>
  );
};
export default Message;