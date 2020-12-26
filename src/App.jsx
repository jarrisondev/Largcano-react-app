import React, {useState, useEffect} from 'react'
import Dialog from './components/dialog/dialog.jsx'
import Header from './components/header/header.jsx'
import Main from './components/main/main.jsx'
import Footer from './components/footer/footer.jsx'
import Form from './components/form/form.jsx'
import {targInf} from './components/targInf.json'

function App() {
  //states
  let [targId, setTargId] = useState(0)
  let [chekedDialog, setChekedDialog] = useState(false)
  let [checkedForm, setCheckedForm] = useState(false)

  //this hook open and closed the dialog
  useEffect(()=>{   
    if(chekedDialog){
      document.getElementById('dialog').classList.add('start')
      document.body.classList.add('overflow')
    }else{
      document.getElementById('dialog').classList.remove('start')
      document.body.classList.remove('overflow')
    }

    if(targInf.length === 8) localStorage.clear()
  })
  

  return (
    <div className="container" id="container">
        <Dialog targId={targId} setChekedDialog={setChekedDialog} setTargId={setTargId}/>
        <Header setCheckedForm={setCheckedForm} />
        {checkedForm ? <Form  setCheckedForm={setCheckedForm} /> : <Main setTargId={setTargId} setChekedDialog={setChekedDialog}/> }
        <Footer />
      </div>
  );
} 

export default App;
