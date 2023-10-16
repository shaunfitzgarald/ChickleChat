import React, { Component } from 'react';
import ChatRoom from './components/ChatRoom';
import LoginForm from './components/LoginForm';
import { generateKeyPair, encryptMessage, decryptMessage } from './components/CryptoUtils'; // You'll need a crypto library for encryption/decryption

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      messages: [],
    };
  }

  // Handle user authentication
  handleLogin = (user) => {
    this.setState({ user });
  };

  // Send a message
  sendMessage = (messageText) => {
    const { user, messages } = this.state;

    // Encrypt the message before sending it
    const encryptedMessage = encryptMessage(messageText, user.publicKey);

    // Send the encrypted message to the server (not shown here)

    // Update the UI with the encrypted message
    this.setState({
      messages: [
        ...messages,
        {
          text: encryptedMessage,
          sender: user.username,
        },
      ],
    });
  };

  // Receive and decrypt a message
  receiveMessage = (encryptedMessage, senderPublicKey) => {
    const { user, messages } = this.state;

    // Decrypt the message using the sender's public key
    const decryptedMessage = decryptMessage(encryptedMessage, user.privateKey, senderPublicKey);

    // Update the UI with the decrypted message
    this.setState({
      messages: [
        ...messages,
        {
          text: decryptedMessage,
          sender: 'Sender Name', // You should fetch sender information from your server
        },
      ],
    });
  };

  render() {
    const { user, messages } = this.state;

    return (
      <div className="App">
        {user ? (
          <ChatRoom
            user={user}
            messages={messages}
            sendMessage={this.sendMessage}
            receiveMessage={this.receiveMessage}
          />
        ) : (
          <LoginForm onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default App;