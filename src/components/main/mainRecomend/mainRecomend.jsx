import React from 'react'
import Targ from './targ.jsx'
import {targInf} from '../../targInf.json'

function MainRecomend ({setTargId, setClassDialog}) {

    

    return(
        <>
            <section className="main__recomend" id="main__recomend">
                <p className="recomend__text">Recomendaciones</p>
                <div className="recomend__targ">
                    { 
                        targInf.map((object)=> 
                            <Targ key={object.urlImage} 
                            url={object.urlImage} price={object.price} 
                            element1={object.element1} element2={object.element2} 
                            place={object.place} date={object.date} id={object.id} 
                            setTargId={setTargId} setClassDialog={setClassDialog}/>
                        )
                    }
                </div>
            </section>
        
        </>
    )
}

export default MainRecomend