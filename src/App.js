import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App mt-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/Read" element={<Read />} />
          <Route path="/Update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;