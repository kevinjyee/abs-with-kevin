import React from 'react'
import { Route, Link } from 'react-router-dom'
import About from '../about'
import NavBar from "./navbar";
import { HomeContainer } from '../../app'
import { Home } from '../join/Index'

const App = () => (
  <div>
      <NavBar currentPage="1"/>
    <main>
        <Route exact path="/abs-with-kevin/" component={Home} />
      <Route exact path="/abs-with-kevin/todays-workout" component={HomeContainer} />
      <Route exact path="/abs-with-kevin/past-workouts" component={About} />
    </main>
  </div>
)

export default App
