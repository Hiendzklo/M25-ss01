// components/Button.tsx
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button style={{
      margin: '10px',
      padding: '10px 20px',
      border: '1px solid black',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: 'white'
    }}>
      {children}
    </button>
  );
};

export default Button;
