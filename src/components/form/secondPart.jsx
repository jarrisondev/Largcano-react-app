import React, {useRef} from "react";

function SecondPart({setC1, setC2, setC3, setPlace}){

    let inputC1Ref = useRef(null)
    let inputC2Ref = useRef(null)
    let inputC3Ref = useRef(null)
    let inputPlaceRef = useRef(null)

    //caracteristics
    function saveC1(){
        setC1(inputC1Ref.current.value)
    }
    function saveC2(){
        setC2(inputC2Ref.current.value)
    }
    function saveC3(){
        setC3(inputC3Ref.current.value)
    }
    //place
    function savePlace(){
        setPlace(inputPlaceRef.current.value)
    }

    return(
        <>
            <div className="segundaParte">
                <label>
                    <p>
                        Ingrese 3 Caracteristicas:
                    </p> 
                    <br/>
                    <label>
                            <input ref={inputC1Ref} type="text" id="inputC1" placeholder="primer caracteristica" className="inputC1" onBlur={saveC1}/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                            <input ref={inputC2Ref} type="text" id="inputC2" placeholder="segunda caracteristica" className="inputC2" onBlur={saveC2}/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                            <input ref={inputC3Ref} type="text" id="inputC3" placeholder="tercer caracteristica" className="inputC3" onBlur={saveC3}/>
                    </label> 
                    <br/> 
                    <br/> 
                    <label>
                        <p>
                            Ingrese su ubicación
                        </p> 
                            <input ref={inputPlaceRef} type="text" id="inputPlace" placeholder="Ingrese Ubicación" className="inputPlace" onBlur={savePlace}/>
                    </label>      
                </label>
            </div>
        </>
    )
}

export default SecondPart