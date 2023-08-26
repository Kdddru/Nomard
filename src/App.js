import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Todo from './components/Todo';
import Coin from './components/Coin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/coin' element={<Coin/>}/>
      </Routes>
    </div>
  );
}

export default App;
