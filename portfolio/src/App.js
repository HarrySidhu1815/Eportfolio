import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Artifacts from './components/Artifacts/Artifacts';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Artifacts/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
