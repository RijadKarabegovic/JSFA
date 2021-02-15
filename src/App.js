import React from 'react';
import './App.css';
import Functions from './Comp/Pages/Functions/Functions';
import object from './Comp/Pages/object/object';
import Introduction from './Comp/Pages/Introduction/Introduction';
import BasicConcepts from './Comp/Pages/BasicConcepts/BasicConcepts';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Comp/Navbar';
import Footer from './Comp/Pages/footnote/footnote';




function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Introduction} />
        <Route path='/BasicConcepts'  component={BasicConcepts} />
        <Route path='/Functions'  component={Functions} />
        <Route path='/object'  component={object} />
      </Switch>
     <Footer/>
    </Router>
  );
}

export default App;