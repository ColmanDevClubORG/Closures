import React, { useState } from 'react';
import { useValidator } from '../hooks/useValidator';

export const Form = () => {
  const { validate, rules } = useValidator();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailError = validate(formData.email, [rules.required, rules.email]);
    const passwordError = validate(formData.password, [
      rules.required,
      rules.minLength(6),
    ]);

    if (emailError !== true || passwordError !== true) {
      setErrors({ email: emailError, password: passwordError });
    } else {
      setErrors({});
      alert('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};
