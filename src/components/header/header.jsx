import React, {useRef, useEffect} from 'react'
import HeaderLogo from './headerLogo.jsx'
import HeaderPublicar from './headerPublicar.jsx'

function Header ({setCheckedForm, setCheckedMode, chekedDialog, checkedForm}){

    let headerRef = useRef()

    useEffect(()=>{
         if(chekedDialog || checkedForm) headerRef.current.style.display='none'
         else headerRef.current.style.display='flex'
    })

    return(
        <>
        <header className="header" ref={headerRef}>
            <HeaderLogo />
            <br/>
            <HeaderPublicar setCheckedForm={setCheckedForm} setCheckedMode={setCheckedMode}/>
        </header>

        </>
    )
}

export default Header