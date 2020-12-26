import React, {useRef} from 'react'

function FirtPart({setTitle, setDescription, setPrice}){

    let inputTitleRef = useRef(null)
    let inputDescriptionRef = useRef(null)
    let inputPriceRef = useRef(null)


    function saveTitle(){
        setTitle(inputTitleRef.current.value)
    }
    function saveDescription(){
        setDescription(inputDescriptionRef.current.value)
    }

    function savePrice(){
        setPrice(inputPriceRef.current.value)
    }

    return(
        <>
            <div className="primeraParte">
                <label >
                    <p>
                        Seleccionar categoria:
                    </p>
                    <br/>
                    <select id="select1">
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
                    <input ref={inputTitleRef} type="text" id="inputTitle" placeholder="ingrese Titulo" onBlur={saveTitle}/>
                </label>
                <br/>
                <br/>
                <label className="labelDescription">                        
                    Ingrese Una Descripción: 
                    <textarea  ref={inputDescriptionRef} id="inputDescription" className="description" placeholder="ingrese descripción" onBlur={saveDescription}></textarea>
                </label>
                <br/>
                <label>
                    <p>
                    Ingrese El Precio:
                    </p>
                    <br/>
                    <input ref={inputPriceRef} type="text" id="inputPrice" placeholder="ingrese el precio" onBlur={savePrice}/>
                </label>
            </div>
        </>
    )
}

export default FirtPart