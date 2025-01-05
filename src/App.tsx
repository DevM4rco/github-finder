import { Outlet } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <>
      <h1>GitHub User Explorer</h1>
      <Outlet />
    </>
  );
};

export default App;
