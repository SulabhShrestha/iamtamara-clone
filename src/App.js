
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import MyExpertise from './components/MyExpertise';

function App() {
  return (
    <div className="App bg-orange-100 text-black">
     <Header/>
     <main>
      <AboutMe/>
      <MyExpertise/>
      </main>
    </div>
  );
}

export default App;
