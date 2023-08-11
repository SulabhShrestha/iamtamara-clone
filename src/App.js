
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import MyExpertise from './components/MyExpertise';
import DesignEthics from './components/DesignEthics';
import { BrowserRouter as Router,  } from 'react-router-dom';


function App() {
  

  return (
    <div className="App bg-orange-100 text-black">
      <Router>
        <Header />
        <main>
          <AboutMe />
          <MyExpertise />
          <DesignEthics />
        </main>
      </Router>
    </div>
  );
}

export default App;
