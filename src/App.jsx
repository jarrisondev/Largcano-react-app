import React, {useState, useEffect} from 'react'
import Dialog from './components/dialog/dialog.jsx'
import Header from './components/header/header.jsx'
import Main from './components/main/main.jsx'
import Footer from './components/footer/footer.jsx'
import Form from './components/form/form.jsx'
import {targInf} from './components/targInf.json'

function App() {
  //States
  let [targId, setTargId] = useState(0)
  let [checkedDialog, setCheckedDialog] = useState(false)
  let [checkedForm, setCheckedForm] = useState(false)
  let [checkedMode, setCheckedMode] = useState(false)

  //Add and remove the overflow in dialog
  useEffect(()=>{ 
      if(checkedDialog){
        document.body.classList.add('overflow')
      }else{
        document.body.classList.remove('overflow')
      }

    if(targInf.length === 10) localStorage.clear()
  })
  
  //DarkMode Light Mode
  useEffect(()=>{
    if(checkedMode){
      document.body.classList.remove('dark__mode')
      document.body.classList.add('ligth__mode')
    }else{
      document.body.classList.remove('ligth__mode')
      document.body.classList.add('dark__mode')
    }
  },[checkedMode])
  
  return (
    <div className="container">
        <Header setCheckedForm={setCheckedForm} setCheckedMode={setCheckedMode} checkedForm={checkedForm} checkedDialog={checkedDialog} />
        { checkedDialog 
          ? <Dialog targId={targId} setCheckedDialog={setCheckedDialog} setTargId={setTargId}/> 
          : checkedForm 
            ? <Form  setCheckedForm={setCheckedForm} /> 
            : <Main setTargId={setTargId} setCheckedDialog={setCheckedDialog} setCheckedForm={setCheckedForm} />
        }
      {!checkedDialog && <Footer /> } 
      </div>
  );
} 

export default App;
