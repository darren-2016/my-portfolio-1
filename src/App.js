// import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Container } from 'react-bootstrap';
import About from './pages/About';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';


function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route 
            path="/home"
            element={
              <Home />
            }
          />
          <Route 
            path="/about"
            element={
              <About />
            }
          />
          <Route 
            path="/contact"
            element={
              <Contact />
            }
          />
        </Routes>

      </BrowserRouter>
      {/* <Router>

      </Router> */}
      {/* <div className="App">
        <h1>Hello!</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div> */}

    </Container>
    
  );
}

export default App;
