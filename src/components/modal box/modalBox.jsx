import React, {useEffect, useRef} from 'react'
import Button from '../button/button'

export default function ModalBox ({flag, content, on}){

    let modalRef = useRef(null)

    useEffect(()=>{
        if(flag){
            modalRef.current.classList.add('show_modal')
        }else{
            modalRef.current.classList.remove('show_modal')
        }
    })

    return(
        <dialog className="modal" ref={modalRef}>
            <div className="modal__modal_box">
                <p className="modal_box__text">{content}</p>
                <Button  classes="modal_box__buttom" content="Aceptar" on={on} boolean={false}/>
            </div>
        </dialog>
    )
}
