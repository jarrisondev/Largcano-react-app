import React, {useEffect, useState, useRef} from 'react'
import {targInf} from '../targInf.json'

function Dialog({targId, setChekedDialog, setTargId, setDialogRef}){

    let [checkedDialogBuy, setCheckedDialogBuy] = useState(false)
    let dialogRef = useRef(null)
    let dialogBuy = useRef(null)
    let propertyRef = useRef(null)

    function clickSig(){
        if(targId === targInf.length-1) setTargId(0)
        else setTargId(targId + 1)
    }
    function clickAnt(){
        if(targId === 0) setTargId(targInf.length-1)
        else setTargId(targId - 1)
    }

    useEffect(()=>{
        propertyRef.current.innerHTML=targInf[targId].property
        if(checkedDialogBuy) dialogBuy.current.classList.add('startForm')
        else dialogBuy.current.classList.remove('startForm')
    })

    return(
        <>
           <dialog id="dialog" className="dialog" ref={dialogRef} onLoad={()=>{setDialogRef(dialogRef)}}>
                
                <dialog ref={dialogBuy} className="dialogModel">
                    <div className="dialogModel__modal">
                        <p className="modal__text">Feacture in progress...</p>
                        <p className="modal__buttom" onClick={()=> setCheckedDialogBuy(false)}>Aceptar</p>
                    </div>
                </dialog>

                <i className="fas fa-arrow-left arrow" id="ant" onClick={clickAnt}></i>
                <div className="dialog__container">
                    <div className="container__img">
                        <img src={targInf[targId].urlImage} alt="Producto" />
                    </div>
                    <div className="container__inf">
                        <h3>{targInf[targId].title}</h3>
                        <p className="price">{targInf[targId].price}</p>
                        <p className="description">{targInf[targId].description}</p>
                        <p ref={propertyRef} className="property"></p>
                        <div className="container__buy">
                            <p className="buy__buttom" onClick={()=> setCheckedDialogBuy(true)}>Comprar <i className="fas fa-shopping-cart"></i></p>
                        </div>
                    </div>
                </div>
                <p><i className="fas fa-times exit"  onClick={()=>setChekedDialog(false)}></i></p>
                <i className="fas fa-arrow-right arrow" onClick={clickSig} ></i>
            </dialog> 
        </>
    )
}

export default Dialog 