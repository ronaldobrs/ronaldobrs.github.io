import React from 'react'

import Header from './components/header'
import Home from './components/home'
import Pg1 from './components/pg1'
import Pg2 from './components/pg2'
import Pg3 from './components/pg3'
import Pg4 from './components/pg4'
import Pg5 from './components/pg5'
import Footer from './components/footer'

import { BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {

    return(
      
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/components/pg1' component={Pg1} />
          <Route exact path='/components/pg2' component={Pg2} />
          <Route exact path='/components/pg3' component={Pg3} />
          <Route exact path='/components/pg4' component={Pg4} />
          <Route exact path='/components/pg5' component={Pg5} />
        </Switch>
        <Footer />
      </BrowserRouter>

    )
  }

export default App