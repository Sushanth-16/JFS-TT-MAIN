import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Reg from './Reg';
import Home from './Home';

function App() {
  return (
    <>
      <h1>Welcome to the Registration App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/h" element={<Home />} />
          <Route path="/reg" element={<Reg />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
