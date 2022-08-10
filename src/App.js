import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/home/Home';
import Accounts from './page/accounts/Accounts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:id" element={<Accounts/>}/>
          {/* <Route path="/" element={<Home/>} />
          <Route path="/hotels" element={<List/>} />
          <Route path="/hotels/:id" element={<Hotel/>} /> */}
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
