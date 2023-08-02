import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Player from './pages/Player';
import Netflix from './pages/Netflix';
import MoviesPage from './pages/MoviesPage';
import TvShow from './pages/TvShow';
import MyList from './pages/MyList';
// import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/login' element={<LoginPage/>}/>
      <Route exact path='/signup' element={<SignUpPage/>}/>
      <Route exact path='/player' element={<Player/>}/>
      <Route exact path='/' element={<Netflix/>}/>
      <Route exact path='/movie' element={<MoviesPage/>}/>
      <Route exact path='/tv' element={<TvShow/>}/>
      <Route exact path='/myList' element={<MyList/>}/>
      </Routes>
      {/* <Header /> */}
    </BrowserRouter>
  );
}

export default App;
