import './App.css';
import { About } from './pages/components/About/About';
import { Home } from './pages/components/Home/Home';
import { Portofolios } from './pages/components/Portofolios/Portofolios';
import { Services } from './pages/components/Services/Services';
import { AsideBar } from './pages/components/SideBar/AsideBar';

function App() {
  return (
    <div className="main-container">
      <AsideBar />
      <div className="main-content">
        <Portofolios />
      </div>

    </div>
  );
}

export default App;
