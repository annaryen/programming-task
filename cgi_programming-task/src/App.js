import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BusinessCards from './components/BusinessCards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header />
     <BusinessCards />
     <Footer />
    </div>
  );
}

export default App;
