import React from 'react'
import { Route, Link } from 'react-router-dom'
import About from '../about'
import NavBar from "./navbar";
import { HomeContainer } from '../../app'

const App = () => (
  <div>
      <NavBar currentPage="1"/>
    <main>
      <Route exact path="/abs-with-kevin/" component={HomeContainer} />
      <Route exact path="/abs-with-kevin/pass-workouts" component={About} />
    </main>
  </div>
)

export default App
