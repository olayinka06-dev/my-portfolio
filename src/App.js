import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
import Home2 from './components/Home2';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<Home2/>} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
