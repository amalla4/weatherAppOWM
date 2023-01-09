import UilReact from '@iconscout/react-unicons/icons/uil-react';
import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempDetails from './components/TempDetails';

function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-600 to-blue-800 h-fit
    shadow-2xl shadow-black'>
      <TopButtons/>
      <Inputs />
      <TimeAndLocation />
      <TempDetails />
    </div>
  );
}

export default App;
