import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  // Handle input changes
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { onLogin } = this.props;

    // Perform authentication (you should implement this)
    // Example: You can send a request to your backend to verify the credentials

    // For simplicity, we'll assume authentication is successful here
    const user = { username, /* add other user data if needed */ };

    // Call the onLogin function passed as a prop to notify the parent component
    onLogin(user);
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="LoginForm">
        <h2>Login to the Chat App</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
