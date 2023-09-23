import React, { Component } from 'react';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: '',
    };
  }

  // Handle input changes
  handleInputChange = (e) => {
    this.setState({ messageText: e.target.value });
  };

  // Handle message send
  handleSend = () => {
    const { messageText } = this.state;
    const { sendMessage } = this.props;

    if (messageText.trim() !== '') {
      sendMessage(messageText);
      this.setState({ messageText: '' });
    }
  };

  render() {
    const { user, messages } = this.props;
    const { messageText } = this.state;

    return (
      <div className="ChatRoom">
        <div className="ChatHeader">
          <h2>Welcome, {user.username}!</h2>
        </div>
        <div className="ChatMessages">
          {messages.map((message, index) => (
            <div key={index} className={`ChatMessage ${message.sender === user.username ? 'sent' : 'received'}`}>
              <span className="SenderName">{message.sender}</span>
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <div className="ChatInput">
          <input
            type="text"
            placeholder="Type your message..."
            value={messageText}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleSend}>Send</button>
        </div>
      </div>
    );
  }
}

export default ChatRoom;
