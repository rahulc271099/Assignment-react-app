import NavbarSection from './components/NavbarSection';
import { Outlet } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavbarSection/>
      <Outlet/>
    </div>
  );
}

export default App;
