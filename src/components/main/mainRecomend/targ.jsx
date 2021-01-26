import React from 'react'

function Targ ({url, price, element1, element2, place, date, id, setTargId, setChekedDialog}){  

    return(
            <div className="targ__targ" onClick={()=>{setChekedDialog(true)
                                                        setTargId(id-1)
                                                    }}>
                <figure className="r_targ__img">
                    <img src= {url}  alt="Targeta"/>
                </figure>
                <div className="r_targ__price">
                    <p>{price}</p>
                </div>
                <div className="r_targ__elements">
                    <p>{element1}</p>
                    <p>{element2}</p>
                </div>
                <br/>
                <div className="r_targ__place">
                    <p>{place}</p>
                </div>
                <div className="r_targ__date">
                    <p>{date}</p>
                </div>
            </div>
    )
}

export default Targ