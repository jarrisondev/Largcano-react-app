import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dialog from './components/dialog/dialog.jsx'
import Header from './components/header/header.jsx'
import Main from './components/main/main.jsx'
import Footer from './components/footer/footer.jsx'
import Form from './components/form/form.jsx'
import { CounterContext } from './context/CounterContext'
import { targInf } from './components/targInf.json'

export default function App() {
  //States
  let [checkedMode, setCheckedMode] = useState(false)
  let [counter, setCounter] = useState(10)

  //clear localStorage
  useEffect(() => {
    if (targInf.length === 10) localStorage.clear()
  })

  //DarkMode Light Mode
  useEffect(() => {
    if (checkedMode) {
      document.body.classList.remove('dark__mode')
      document.body.classList.add('ligth__mode')
    } else {
      document.body.classList.remove('ligth__mode')
      document.body.classList.add('dark__mode')
    }
  }, [checkedMode])

  return (
    <div className='container'>
      <CounterContext.Provider value={{ counter, setCheckedMode }}>
        <Router>
          <Switch>
            <Route path='/form'>
              <Form setCounter={setCounter} />
              <Footer />
            </Route>
            <Route path='/:id'>
              <Dialog />
            </Route>
            <Route path='/'>
              <Header />
              <Main />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </CounterContext.Provider>
    </div>

    //
  )
}
