// LoginForm.js
import React, { Component } from 'react';
import users from './user-data'; // Import user data

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: null,
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    // Simulate authentication logic
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      this.props.onLogin(user); // Call the parent component's onLogin function
      this.setState({ error: null });
    } else {
      this.setState({ error: 'Invalid username or password' });
    }
  };

  render() {
    const { username, password, error } = this.state;

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
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
