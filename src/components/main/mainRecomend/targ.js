import React from 'react'

function Targ (props){        
    return(
        <div className="targ" id="targ_1">
            <div className="targ__targ">
                <figure className="r_targ__img">
                    <img src= {props.url}  alt="Targeta"/>
                </figure>
                <div className="r_targ__price">
                    <p id="precio">{props.price}</p>
                </div>
                <div className="r_targ__elements">
                    <p>{props.element1}</p>
                    <p>{props.element2}</p>
                </div>
                <br/>
                <div className="r_targ__title">
                    <p>{props.place}</p>
                </div>
                <div className="r_targ__date">
                    <p>{props.date}</p>
                </div>
            </div>
        </div>
    )
}

export default Targ