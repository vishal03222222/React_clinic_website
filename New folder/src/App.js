import logo from './logo.svg';
import './App.css';
import Spinner from './Components/Spinner';
import HeaderTopBar from './Components/Topbar';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import AboutUs from './Components/About';
import Services from './Components/Service';
import Features from './Components/Feature';
import Doctors from './Components/Team';
import Appointment from './Components/Appointment';
import Testimonials from './Components/Testimonial';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Spinner/>
     
      <HeaderTopBar/>
      <Navbar/>
      <Header/>
      <AboutUs/>
      <Services/>
      <Features/>
      <Doctors/>
      <Appointment/>
      <Testimonials/>
      <Footer/>

    </div>
  );
}

export default App;
