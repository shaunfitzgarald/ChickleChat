import React, { useState } from 'react';
import { signin } from '../authService'; // adjust the path according to your file structure

const SignIn = () => {
  // State hooks for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await signin(email, password);
      // Handle successful signin
    } catch (error) {
      // Handle errors
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;