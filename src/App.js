
import './App.css';
import Contact from './Componensts/Conatct/Contact';
import Experince from './Componensts/experince/Experince';
import Footer from './Componensts/Footer/Footer';
import Intro from './Componensts/introsec/Intro';
import Navbar from './Componensts/Navbar';
import Portfolio from './Componensts/Portfolio/Portfolio';
import Service from './Componensts/Service/Service';
import Testimponial from './Componensts/Testimonial/Testimponial';
import Works from './Componensts/Works/Works';

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Intro/>
      <Service/>
      <Experince/>
      <Works/>
      <Portfolio/>
      <Testimponial/>
      <Contact/>
      <Footer/>
    </div>
  
    </>
  );
}

export default App;
