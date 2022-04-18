import React from 'react';
import Home from './Home';
import Solution from './Solution';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import { Switch,Route} from 'react-router-dom';
import { Redirect } from 'react-router-dom';


const App = () => {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path = "/" component={Home} />
      <Route exact path = "/solution" component={Solution} />
      <Route exact path = "/contact" component={Contact} />
      <Redirect to="/" />
    <Home />
    </Switch>
    <Footer />
    </>
 
  );
}

export default App;
