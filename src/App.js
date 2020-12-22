import React, {useState, useEffect} from 'react'
import Dialog from './components/dialog/dialog.js'
import Header from './components/header/header.js'
import Main from './components/main/main.js'
import Footer from './components/footer/footer.js'

function App() {
  let [targId, setTargId] = useState(0)
  let [classDialog, setClassDialog] = useState(false)

  useEffect(()=>{   
    if(classDialog){
      document.getElementById('dialog').classList.add('start')
      document.getElementById('container').classList.add('overflow')
    }else{
      document.getElementById('dialog').classList.remove('start')
      document.getElementById('container').classList.remove('overflow')
    }
  })

  return (
      <div className="container" id="container">
        <Dialog targId={targId} setClassDialog={setClassDialog} setTargId={setTargId}/>
        <Header />
        <Main setTargId={setTargId} setClassDialog={setClassDialog}/>
        <Footer />
      </div>
  );
} 

export default App;
