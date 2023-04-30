import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Copyright } from "./assets/components/Copyright"
import { NavbarMenu } from "./assets/components/NavbarMenu"
import { About } from "./assets/pages/About"
import { Home } from "./assets/pages/Home"
import { Contact } from './assets/pages/Contact'


const App = () => {
  return (
    <BrowserRouter>
      <NavbarMenu />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
      </Switch>
      <Copyright />
    </BrowserRouter>
  )
}

export default App
