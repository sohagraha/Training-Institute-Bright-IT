//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header></Header>

        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about-us'>
            <About></About>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>

        <Footer></Footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
