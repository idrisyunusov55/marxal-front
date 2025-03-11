import React from 'react'
import Home from './pages/home/Home'
import Router from './router/Router'
import { ThemeProvider } from './pages/context/context'

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Router/>
      </ThemeProvider>
      
    </div>
  )
}

export default App