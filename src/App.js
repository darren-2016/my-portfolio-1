import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Container } from 'react-bootstrap';
import About from './pages/About';
import Header from './components/Header';


function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route 
            path="/about"
            element={
              <About />
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
