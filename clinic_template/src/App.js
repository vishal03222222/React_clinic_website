import logo from './logo.svg';
import './App.css';
import Spinner from './components/Spinner';
import HeaderTopBar from './components/Topbar';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutUs from './components/About';
import Services from './components/Service';
import Features from './components/Feature';
import Doctors from './components/Team';
import Appointment from './components/Appointment';
import Testimonials from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Spinner />

      <HeaderTopBar />
      <Navbar />
      <Header />
      <AboutUs />
     <Services />
      <Features /> 
      <Doctors />
      <Appointment />
      <Testimonials />
      <Footer />

    </div>
  );
}

export default App;
