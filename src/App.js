import logo from './logo.svg';
import './App.css';
import AddProducts from './components/AddProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchProducts from './components/SearchProducts';
import ViewAll from './components/ViewAll';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AddProducts/>}/>
    <Route path="/search" element={<SearchProducts/>}/>
    <Route path="/viewall" element={<ViewAll/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;