import React from 'react';
import ReactDOM from 'react-dom';
import BaseLayout from './components/layout/BaseLayout'
import AboutUs from './components/AboutUs'
import Faqs from './components/Faqs'
import Forms from './components/Forms'
import Plots from './components/Plots'

import {
  BrowserRouter as Router,
  Route,Switch
} from 'react-router-dom'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/about' component={AboutUs} />
          <Route path='/forms'component= {Forms}/>
          <Route path='/faqs/:faqID' component= {Faqs}/>
          <Route path='/plots' component= {Plots}/>
        </Switch>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

