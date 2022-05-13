import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NewTicket } from './new-ticket/NewTicket'


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path='/' element={<NewTicket />} />
      </Routes> 
      </Router>
    </div>
  );
}

export default App;
