import './App.css';
import About from './Components/About';
import Appointment from './Components/Appointment';
import Footer from './Components/Footer';
import Future from './Components/Future';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Service from './Components/Services';
import Team from './Components/Team';
import Testsection from './Components/Testsection';
import Topsection from './Components/Topsection';


function App() {
  return (
    <div className="App">
      <Topsection/>
      <Navbar/>
      <Header/>
      <About/>
      <Service/>
      <Future/>
      <Team/>
      <Appointment/>
      <About/>
      <Testsection/>
      <Footer/>
    </div>
  );
}

export default App;
