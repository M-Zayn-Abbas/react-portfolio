import Layout from './components/layout/Layout.js'
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.js';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element = {<Layout/>}>
      <Route index element={<Home/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
