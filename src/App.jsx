import React, {useState, useEffect, useRef} from 'react'
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
  let [checkedMode, setCheckedMode] = useState(false)
  let [dialogRef, setDialogRef] = useState(null)

  let containerRef = useRef(null)

  //this hook open and closed the dialog
  useEffect(()=>{ 
    if(dialogRef !== null){
      if(chekedDialog){
        dialogRef.current.classList.add('start')
        document.body.classList.add('overflow')
      }else{
        dialogRef.current.classList.remove('start')
        document.body.classList.remove('overflow')
      }
    }

    if(targInf.length === 8) localStorage.clear()
  })
  
  //DarkMode
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
    <div ref={containerRef} className="container">
        <Dialog setDialogRef={setDialogRef} targId={targId} setChekedDialog={setChekedDialog} setTargId={setTargId}/>
        <Header setCheckedForm={setCheckedForm} setCheckedMode={setCheckedMode} chekedDialog={chekedDialog} checkedForm={checkedForm} />
        {checkedForm ? <Form  setCheckedForm={setCheckedForm} /> : <Main setTargId={setTargId} setChekedDialog={setChekedDialog} setCheckedForm={setCheckedForm} /> }
        <Footer />
      </div>
  );
} 

export default App;
