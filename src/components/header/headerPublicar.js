import React from 'react'

function HeaderPublicar (){
    return(
        <>
        <div className="header__publicar_cop">
        <button className="publicar_cop__publicar" id="publicar">Publica un articulo</button>
                 <br/> 
                <div className="publicar_cop__cop">
                     <p >
                         <span id="cop">
                            cop
                         </span> 
                         <i className="fas fa-caret-down"></i>
                     </p>
                </div>
        </div>
        </>
    )
}

export default HeaderPublicar