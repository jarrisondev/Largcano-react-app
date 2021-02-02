import React from 'react'
import Button from '../button/button'

export default function ModalBox ({content, on}){

    return(
        <dialog className="modal">
            <div className="modal__modal_box">
                <p className="modal_box__text">{content}</p>
                <Button  classes="modal_box__buttom" content="Aceptar" on={on} boolean={false}/>
            </div>
        </dialog>
    )
}
