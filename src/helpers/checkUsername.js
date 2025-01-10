import { useState } from "react";

export default function UsernameValidation(username) {
  const [isValid, setIsValid] = useState(false);

  
  const validateUsername = (value) => {
    const regex = /^[a-zA-Z0-9_]{3,16}$/;
    return regex.test(value)
  };
  
 const handleChange = (event) => {
  const value = username;
  setIsValid(validateUsername(value));
 };

 return (
  <div>
    {isValid ? (
      <span style={{ color: 'green' }}>Valid</span>
    ) : (
      <span style={{ color: 'red' }}>Invalid</span>
    )}
  </div>
 )
};