import React from "react";

function SecondPart({setC1, setC2, setC3}){
    //caracteristics
    function saveC1(){
        setC1(document.getElementById('inputC1').value)
    }
    function saveC2(){
        setC2(document.getElementById('inputC2').value)
    }
    function saveC3(){
        setC3(document.getElementById('inputC3').value)
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
                            <input type="text" id="inputC1" placeholder="primer caracteristica" className="inputC1" onBlur={saveC1}/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                            <input type="text" id="inputC2" placeholder="segunda caracteristica" className="inputC2" onBlur={saveC2}/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                            <input type="text" id="inputC3" placeholder="tercer caracteristica" className="inputC3" onBlur={saveC3}/>
                    </label>      
                </label>
            </div>
        </>
    )
}

export default SecondPart