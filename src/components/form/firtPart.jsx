import React, {useRef, useState, useEffect} from 'react'

function FirtPart({setTitle, setDescription, setPrice, setSelectValue, setCheckedFirtPart}){

    let inputSelectRef = useRef(null)
    let inputTitleRef = useRef(null)
    let inputDescriptionRef = useRef(null)
    let inputPriceRef = useRef(null)

    let [flagTitle, setFlagTitle] = useState(false)
    let [flagDescription, setFlagDescription] = useState(false)
    let [falgPrice, setFlagPrice] = useState(false)

    function checkTitle(){
        if(inputTitleRef.current.value === ""){
            inputTitleRef.current.style.backgroundColor="rgb(194, 6, 0)"
            inputTitleRef.current.style.color="white"
            setFlagTitle(false)
        }else{
            inputTitleRef.current.style.backgroundColor="rgb(232, 240, 254)"
            inputTitleRef.current.style.color="Black"
            setFlagTitle(true)
        }
    }
    function checkDescription(){
        if(inputDescriptionRef.current.value === ""){
            inputDescriptionRef.current.style.backgroundColor="rgb(194, 6, 0)"
            inputDescriptionRef.current.style.color="white"
            setFlagDescription(false)
        }else{
            inputDescriptionRef.current.style.backgroundColor="rgb(232, 240, 254)"
            inputDescriptionRef.current.style.color="Black"
            setFlagDescription(true)
        }
    }
    function checkPrice(){
        if(inputPriceRef.current.value === ""){
            inputPriceRef.current.style.backgroundColor="rgb(194, 6, 0)"
            inputPriceRef.current.style.color="white"
            setFlagPrice(false)
        }else{
            inputPriceRef.current.style.backgroundColor="rgb(232, 240, 254)"
            inputPriceRef.current.style.color="Black"
            setFlagPrice(true)
        }
    }

    useEffect(()=>{
        if(flagTitle && flagDescription && falgPrice) setCheckedFirtPart(true)
        else setCheckedFirtPart(false)
    })

    return(
        <>
            <div className="primeraParte">
                <label >
                    <p>
                        Seleccionar categoria:
                    </p>
                    <br/>
                    <select className="primera_parte__select" ref={inputSelectRef} onChange={()=> setSelectValue(inputSelectRef.current.value)}>
                        <option value="Vehiculo">Vehiculo</option>
                        <option value="Vestimenta">Vestimenta</option>
                        <option value="Consolas">Consolas</option>
                        <option value="Juguetes">Juguetes</option>
                        <option value="ascesorios">Ascesorios</option>
                    </select>
                </label>
                <br/>
                <br/>
                <label>
                    <p>
                    Ingrese Un Titulo:
                    </p>
                    <br/>
                    <input ref={inputTitleRef} type="text" id="inputTitle" placeholder="ingrese Titulo" onBlur={()=> {setTitle(inputTitleRef.current.value); checkTitle()}}/>
                </label>
                <br/>
                <br/>
                <label className="labelDescription">                        
                    Ingrese Una Descripción: 
                    <textarea  ref={inputDescriptionRef} id="inputDescription" className="description" placeholder="ingrese descripción" onBlur={()=>{setDescription(inputDescriptionRef.current.value); checkDescription()}}></textarea>
                </label>
                <br/>
                <br/>
                <label>
                    <p>
                    Ingrese El Precio:
                    </p>
                    <br/>
                    <input ref={inputPriceRef} type="text" id="inputPrice" placeholder="Ej 43,239,482" onBlur={()=>{setPrice(inputPriceRef.current.value); checkPrice()}}/>
                </label>
            </div>
        </>
    )
}

export default FirtPart