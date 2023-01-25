import './App.css';
import Navbar from './component/Navbar.js'
import Sendreport from './component/Sendreport.js';
import "bootstrap/dist/css/bootstrap.min.css"
import Allreport from './component/Allreport';
import Detail from './component/Detail';
import { Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Allreport/>}></Route>
        <Route path='/report' element={<Sendreport/>}></Route>
        <Route path='/data' element={<Detail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
