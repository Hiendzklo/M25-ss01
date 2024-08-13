import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ padding: '20px', backgroundColor: 'red', textAlign: 'center' }}> 
      <h1>Rikkei Academy</h1>
      <nav>
        <a href="/" style={{ margin: '0 10px', color: 'white' }}>Home</a>
        <a href="/about" style={{ margin: '0 10px', color: 'white' }}>About</a>
        <a href="/contact" style={{ margin: '0 10px', color: 'white' }}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
