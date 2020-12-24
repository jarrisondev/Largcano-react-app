import React from 'react'

function FirtPart({setTitle, setDescription}){

    function saveTitle(){
        setTitle(document.getElementById('inputTitle').value)
    }
    function saveDescription(){
        setDescription(document.getElementById('inputDescription').value)
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
                    Ingrese Un Titulo:
                    <br/>
                    <input type="text" id="inputTitle" placeholder="ingrese Titulo" onBlur={saveTitle}/>
                </label>
                <br/>
                <br/>
                <label className="labelDescription">                        
                    Ingrese Una Descripción: 
                    <textarea  id="inputDescription" className="description" placeholder="ingrese descripción" onBlur={saveDescription}></textarea>
                </label>
            </div>
        </>
    )
}

export default FirtPart