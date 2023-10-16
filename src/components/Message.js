import React from 'react';

const Message = ({ text, sender }) => {
    return (
        <div className={`message ${sender === 'user' ? 'user-message' : 'bot-message'}`}>
            <p>{text}</p>
        </div>
    );
};

export default Message;
