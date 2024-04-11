import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library, IconProp } from '@fortawesome/fontawesome-svg-core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ParticlesContainer } from './features/Particles';

function App() {
  const [state, setState] = useState<Object>({});

  library.add(fas);

  const fasIcons = Object.keys(fas);
  // @ts-ignore
  const myIcon = state as IconProp;

  const randomIconName = fasIcons[Math.floor(Math.random() * fasIcons.length)];

  const handleClick = async () => {
    await setState(fas[randomIconName]);
    toast(<FontAwesomeIcon icon={myIcon} />);
  };

  return (
    <div className="wrapper">
      <ParticlesContainer />

      <div className="container">
        <Button handleClick={handleClick} />

        <ToastContainer autoClose={3000} />
      </div>
    </div>
  );
}

export default App;
