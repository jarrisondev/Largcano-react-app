import React, {useRef} from 'react'

function HeaderPublicar ({setCheckedForm, setCheckedMode}){

    function setFormCheked (){
        setCheckedForm(true)
    }

    let checkThemeRef = useRef(null)
    let labelcheckRef = useRef(null)

    function HandleCheckTheme() {
        if(checkThemeRef.current.checked) setCheckedMode(true)
        else setCheckedMode(false)
    }

    return(
        <>
        <div className="header__publicar_check">
                <input id="checktheme" type="checkBox" ref={checkThemeRef} className="header__publicar_check__check"  onChange={HandleCheckTheme}/>
                <label htmlFor="checktheme" className="header__publicar_check_checkLabel" ref={labelcheckRef}></label>
                <button className="header__publicar_check__publicar" onClick={setFormCheked}>Publica un articulo</button>
        </div>
        </>
    )
}

export default HeaderPublicar