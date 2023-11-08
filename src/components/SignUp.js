import React, { useState } from 'react';
import { signup } from '../authService'; // adjust the path according to your file structure

const SignUp = () => {
  // State hooks for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      await signup(email, password);
      // Handle successful signup, e.g., navigate to the chat page or show a success message
    } catch (error) {
      // Handle errors, e.g., show an error message to the user
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
