import React, {useRef, useEffect, useState} from "react";

function SecondPart({setC1, setC2, setC3, setPlace, selectValue, setCheckedSecondPart, saveImg, imgRef}){

    let inputC1Ref = useRef(null)
    let inputC2Ref = useRef(null)
    let inputC3Ref = useRef(null)
    let inputPlaceRef = useRef(null)

    let [flagC, setFlagC] = useState(false)
    let [flagPlace, setFlagPlace] = useState(false)

    useEffect(()=>{
        if(selectValue === 'Vehiculo'){
            inputC1Ref.current.value = 'Marca: '
            inputC2Ref.current.value = 'Condición:'
            inputC3Ref.current.value = 'Kilometraje:'
        }else if(selectValue === 'Vestimenta'){
            inputC1Ref.current.value = 'tipo: '
            inputC2Ref.current.value = 'Marca:'
            inputC3Ref.current.value = 'categoria:'
        }else if(selectValue === 'Consolas'){
            inputC1Ref.current.value = 'Cpu: '
            inputC2Ref.current.value = 'Capacidad:'
            inputC3Ref.current.value = 'Memoria:'
        }else if(selectValue === 'Juguetes'){
            inputC1Ref.current.value = 'Tamaño: '
            inputC2Ref.current.value = 'Clasificación:'
            inputC3Ref.current.value = 'Material:'
        }else{
            inputC1Ref.current.value = 'sexo: '
            inputC2Ref.current.value = 'Condición:'
            inputC3Ref.current.value = 'categoria:'
        }
    }, [selectValue])

    function checkCharacteristics() {
        let cont = 0

        if(inputC1Ref.current.value === "" || inputC1Ref.current.value === 'Marca: '|| inputC1Ref.current.value === 'tipo: ' || inputC1Ref.current.value === 'Cpu: ' || inputC1Ref.current.value === 'Tamaño: ' || inputC1Ref.current.value ===  'sexo: ' ){
            inputC1Ref.current.style.backgroundColor="rgb(194, 6, 0)"
            inputC1Ref.current.style.color="white"
            cont = 0
        }else{
            inputC1Ref.current.style.backgroundColor="rgb(232, 240, 254)"
            inputC1Ref.current.style.color="Black"
            cont++
        }

        if(inputC2Ref.current.value === "" || inputC2Ref.current.value === 'Condición:'|| inputC2Ref.current.value === 'Marca:' || inputC2Ref.current.value === 'Capacidad:' || inputC2Ref.current.value === 'Clasificación:' || inputC2Ref.current.value === 'Condición:' ){
            inputC2Ref.current.style.backgroundColor="rgb(194, 6, 0)"
            inputC2Ref.current.style.color="white"
            cont = 0
        }else{
            inputC2Ref.current.style.backgroundColor="rgb(232, 240, 254)"
            inputC2Ref.current.style.color="Black"
            cont++
        }

        if(inputC3Ref.current.value === "" || inputC3Ref.current.value === "Kilometraje:"|| inputC3Ref.current.value === "categoria:" || inputC3Ref.current.value === 'Memoria:' || inputC3Ref.current.value === 'Material:' || inputC3Ref.current.value === 'categoria:' ){
            inputC3Ref.current.style.backgroundColor="rgb(194, 6, 0)"
            inputC3Ref.current.style.color="white"
            cont = 0
        }else{
            inputC3Ref.current.style.backgroundColor="rgb(232, 240, 254)"
            inputC3Ref.current.style.color="Black"
            cont++
        }

        if(cont=== 3) setFlagC(true)
        else setFlagC(false)
    }

    function checkPlace() {
        if(inputPlaceRef.current.value === ""){
            inputPlaceRef.current.style.backgroundColor="rgb(194, 6, 0)"
            inputPlaceRef.current.style.color="white"
            setFlagPlace(false)
        }else{
            inputPlaceRef.current.style.backgroundColor="rgb(232, 240, 254)"
            inputPlaceRef.current.style.color="Black"
            setFlagPlace(true)
        }
    }

    useEffect(()=>{
        if(flagC && flagPlace) setCheckedSecondPart(true)
    })

    return(
        <>
            <div className="segundaParte">
                    <label>
                        <p>
                            Ingrese 3 Caracteristicas:
                        </p> 
                        <br/>
                            <input ref={inputC1Ref} type="text" id="inputC1" placeholder="primer caracteristica" className="inputC1" onBlur={()=>{setC1(inputC1Ref.current.value); checkCharacteristics()}}/>
                    </label>
                    <br/>
                    <label>
                            <input ref={inputC2Ref} type="text" id="inputC2" placeholder="segunda caracteristica" className="inputC2" onBlur={()=>{setC2(inputC2Ref.current.value); checkCharacteristics()}}/>
                    </label>
                    <br/>
                    <label>
                            <input ref={inputC3Ref} type="text" id="inputC3" placeholder="tercer caracteristica" className="inputC3" onBlur={()=>{setC3(inputC3Ref.current.value); checkCharacteristics()}}/>
                    </label> 
                    <br/> 
                    <label className="inputPlace">
                        <p>
                            Ingrese su ubicación
                        </p> 
                        <br/>
                            <input ref={inputPlaceRef} type="text" id="inputPlace" placeholder="Ingrese Ubicación" className="inputPlace" onBlur={()=> {setPlace(inputPlaceRef.current.value); checkPlace()}}/>
                    </label>  
                
            </div>
        </>
    )
}

export default SecondPart