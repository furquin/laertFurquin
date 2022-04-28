import React from 'react'
import { Route, Switch } from 'react-router-dom';
import BackEnd from '../pages/backEnd'
import FrontEnd from '../pages/frontEnd'
import HomePage from '../pages/homePage';
import Agradecimento from '../components/Agradecimento'


export default function index() {
  return (
    <div>
      <>
        <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/backEnd" component={BackEnd} />
              <Route exact path="/frontEnd" component={FrontEnd} />
              <Route exact path="/agradecimento" component={Agradecimento} />
        </Switch>  
      
      
      </>
              
    </div>
  )
}
