import React, {useEffect, useState, useRef} from 'react'
import ModalBox from '../modal box/modalBox'
import Button from '../button/button'
import {targInf} from '../targInf.json'

function Dialog({targId, setCheckedDialog, setTargId}){

    let [checkedDialogBuy, setCheckedDialogBuy] = useState(false)
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
    })

    return(
        <>
           <dialog id="dialog" className="dialog">

                {checkedDialogBuy ? <ModalBox content="En progreso" on={setCheckedDialogBuy}/> : null} 

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
                            <Button classes='buy__buttom' content= 'Comprar' on={setCheckedDialogBuy} boolean={true} iconClass="fas fa-shopping-cart"/>
                            <div className="buy__arrows">
                                <Button classes="fas fa-arrow-left arrow" content=""on={clickAnt}/>
                                <Button classes="fas fa-arrow-right arrow"content="" on={clickSig}/>
                            </div>
                        </div>
                    </div>
                </div>
                <p><i className="fas fa-times exit"  onClick={()=>setCheckedDialog(false)}></i></p>
            </dialog> 
        </>
    )
}

export default Dialog 