import './App.css';
import Footer from './Folder/11-Footer/Footer';
import Navbar from './Folder/3-Nav/Navbar';
import Header from './Folder/4-Header/Header';
import About from './Folder/5-About/About';
import Services from './Folder/6-Service/Services';
import Future from './Folder/7-Future/Future';
import Team from './Folder/8-Team/Team';
import Appointment from './Folder/9-Appointment/Appointment';
import Topsection from './Folder/2-TOP/Topsection';
import Testsection from './Folder/10-Test/Testsection';

function App() {
  return (
    <div className="App">
      <Topsection/>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
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
