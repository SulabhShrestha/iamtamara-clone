
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import MyExpertise from './components/MyExpertise';
import DesignEthics from './components/DesignEthics';

function App() {
  return (
    <div className="App bg-orange-100 text-black">
     <Header/>
     <main>
      <AboutMe/>
      <MyExpertise/>
      <DesignEthics/>
      </main>
    </div>
  );
}

export default App;
