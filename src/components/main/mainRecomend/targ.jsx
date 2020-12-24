import React from 'react'

function Targ ({url, price, element1, element2, place, date, id, setTargId, setChekedDialog}){  
    
    function setTargID(){
        setTargId(id-1)
    }
    function setDialogCheked(){
        setChekedDialog(true)
    }

    return(
        <div className="targ" id="targ_1" onClick={setTargID}>
            <div className="targ__targ" onClick={setDialogCheked}>
                <figure className="r_targ__img">
                    <img src= {url}  alt="Targeta"/>
                </figure>
                <div className="r_targ__price">
                    <p id="precio">{price}</p>
                </div>
                <div className="r_targ__elements">
                    <p>{element1}</p>
                    <p>{element2}</p>
                </div>
                <br/>
                <div className="r_targ__title">
                    <p>{place}</p>
                </div>
                <div className="r_targ__date">
                    <p>{date}</p>
                </div>
            </div>
        </div>
    )
}

export default Targ