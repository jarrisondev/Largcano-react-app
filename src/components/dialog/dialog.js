import React from 'react'
//import {targInf} from '../targInf.json'

function Dialog(){
    return(
        <>
           <dialog id="dialog" className="dialog">
                <i className="fas fa-arrow-left arrow" id="ant"></i>
                <div className="dialog__container">
                    <div className="container__img">
                        <img id="img" src="./img/recomend/1.jpg" alt="Producto" />
                    </div>
                    <div className="container__inf">
                        <h3 id="title">Titulo</h3>
                        <p id="price" className="price">Precio</p>
                        <p id="description" className="description">Descripción</p>
                        <p id="property" className="property">propiedades</p>
                        <p id="buy" className="buy">Comprar <i className="fas fa-shopping-cart"></i></p>
                    </div>
                </div>
                <p><i className="fas fa-times exit" id="exit"></i></p>
                <i className="fas fa-arrow-right arrow"id="sig"></i>
            </dialog> 
        </>
    )
}

export default Dialog 