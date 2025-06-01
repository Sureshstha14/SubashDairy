import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'; // You can use React Bootstrap or TailwindCSS based on your setup

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (email and password must not be empty)
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    // You can handle the login logic here (e.g., calling an API)
    // For now, we'll just log the values to the console
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Clear the error message after submitting
    setError('');
  };

  return (
    <div className="container mx-auto p-4 max-w-sm">
      <h2 className="text-center text-2xl font-semibold mb-4">Sign In</h2>
      <Form onSubmit={handleSubmit}>
        {/* Error Message */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {/* Email Input */}
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        {/* Password Input */}
        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit" className="w-full">
          Sign In
        </Button>
      </Form>

      {/* Additional Links */}
      <div className="text-center mt-4">
        <a href="/forgot-password" className="text-blue-600">Forgot your password?</a>
      </div>
      <div className="text-center mt-2">
        <span>Don't have an account? <a href="/signup" className="text-blue-600">Sign Up</a></span>
      </div>
    </div>
  );
}

export default SignIn;
