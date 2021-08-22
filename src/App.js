//import logo from './logo.svg';
import './App.css';
// import './assets/scss/theme.scss';
import './scss/main.scss';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import {Route,Switch} from 'react-router-dom';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Cover from './panels/Cover';
import Header from './panels/Header';
import Footer from './panels/Footer';


function App() {
  return (
    <div class="d-flex w-100 h-100 p-3 mx-auto flex-column border border-1">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column border border-1">
        <Header/>
        <Switch>
          <Route path='/Home' component={Cover} exact={true} />
          <Route path='/Gallery' component={Gallery}/>
          <Route path='/:id' component={Cover}/>
          <Route path='/' component={Home}/>
        </Switch>
        <Footer/>
      </div>
     </div>
  );
}

export default App;
