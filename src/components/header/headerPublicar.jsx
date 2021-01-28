import React, {useRef} from 'react'
import Button from '../button/button'

function HeaderPublicar ({setCheckedForm, setCheckedMode}){

    let checkThemeRef = useRef(null)

    function HandleCheckTheme() {
        if(checkThemeRef.current.checked) setCheckedMode(true)
        else setCheckedMode(false)
    }

    return(
        <>
        <div className="header__publicar_check">
                <input id="checktheme" type="checkBox" ref={checkThemeRef} className="publicar_check__check"  onChange={HandleCheckTheme}/>
                <label htmlFor="checktheme" className="publicar_check__checkLabel"></label>
                < Button classes="publicar_check__publicar" on={setCheckedForm} content="Publica un articulo" boolean={true}/>
        </div>
        </>
    )
}

export default HeaderPublicar