import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [textColor, setTextColor] = useState('black');
  
  useEffect( () => {
    const handleKeyDown = (event) => {
      if (event.key === 'a') {
        setTextColor('blue');
      } else if (event.key === 'd') {
        setTextColor('red')
      }
    }

    const handleKeyUp = () => {
      setTextColor('black')
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: textColor }}>Some Text</h1>
    </div>
  );
}

export default App;
