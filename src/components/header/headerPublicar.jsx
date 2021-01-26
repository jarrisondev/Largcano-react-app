import React, {useRef} from 'react'

function HeaderPublicar ({setCheckedForm, setCheckedMode}){

    let checkThemeRef = useRef(null)

    function HandleCheckTheme() {
        if(checkThemeRef.current.checked) setCheckedMode(true)
        else setCheckedMode(false)
    }

    return(
        <>
        <div className="header__publicar_check">
                <input id="checktheme" type="checkBox" ref={checkThemeRef} className="header__publicar_check__check"  onChange={HandleCheckTheme}/>
                <label htmlFor="checktheme" className="header__publicar_check_checkLabel"></label>
                <button className="button__publicar" onClick={()=>setCheckedForm(true)}>Publica un articulo</button>
        </div>
        </>
    )
}

export default HeaderPublicar