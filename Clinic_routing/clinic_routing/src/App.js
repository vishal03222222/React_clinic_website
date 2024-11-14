import { Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path='/'/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Feature' element={<Future/>}/>
        <Route path='/Team' element={<Team/>}/>
        <Route path='/Appointment' element={<Appointment/>}/>
        <Route path='/testimonial' element={<Testsection/>}/>
        <Route path='/contact' />
      </Routes>
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
