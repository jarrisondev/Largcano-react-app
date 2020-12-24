import React, {useEffect} from 'react'
import {targInf} from '../targInf.json'

function Dialog({targId, setChekedDialog, setTargId}){


    function clickSig(){
        if(targId === targInf.length-1) setTargId(0)
        else setTargId(targId + 1)
    }
    function clickAnt(){
        if(targId === 0) setTargId(targInf.length-1)
        else setTargId(targId - 1)
    }
    function setDialogCheked(){
        setChekedDialog(false)
    }

    useEffect(()=>{
        document.getElementById('property').innerHTML=targInf[targId].property
    })

    return(
        <>
           <dialog id="dialog" className="dialog">
                <i className="fas fa-arrow-left arrow" id="ant" onClick={clickAnt}></i>
                <div className="dialog__container">
                    <div className="container__img">
                        <img id="img" src={targInf[targId].urlImage} alt="Producto" />
                    </div>
                    <div className="container__inf">
                        <h3 id="title">{targInf[targId].title}</h3>
                        <p id="price" className="price">{targInf[targId].price}</p>
                        <p id="description" className="description">{targInf[targId].description}</p>
                        <p id="property" className="property"></p>
                        <p id="buy" className="buy">Comprar <i className="fas fa-shopping-cart"></i></p>
                    </div>
                </div>
                <p><i className="fas fa-times exit" id="exit" onClick={setDialogCheked}></i></p>
                <i className="fas fa-arrow-right arrow" id="sig" onClick={clickSig} ></i>
            </dialog> 
        </>
    )
}

export default Dialog 