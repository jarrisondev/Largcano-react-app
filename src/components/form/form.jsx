import React, {useState} from 'react'
import FirtPart from './firtPart.jsx'
import SecondPart from "./secondPart.jsx"
import {targInf} from '../targInf.json'

function Form ({setCheckedForm}){

    let [title, setTitle] = useState(" ")
    let [description, setDescription] = useState("")
    //caracteristics
    let [c1, setC1] = useState("")
    let [c2, setC2] = useState("")
    let [c3, setC3] = useState("")

    function setFormCheked(){
        setCheckedForm(false)
    }
    function sendData(){
        targInf.push(data)
        setCheckedForm(false)
    }

    let data = {
        "id": (targInf.length + 1),
        "urlImage":"./img/recomend/1.jpg",
        "title": title,
        "price": "COP 90,325,568",
        "description": description,
        "property":`<ul><li>${c1}</li><li>${c2}</li><li>${c3}</li></ul>`,
        "date": "11 SEPT",
        "place":"Medellín, Colombia",
        "element1":title,
        "element2":""

    }

    return(
        <>
            <dialog className="dialogForm" id="dialogForm">
                <div className="dialogonClick={changeImageBanner}Form__modal">
                    <p className="modal__text">Rellene los Campos Correctamente</p>
                    <p className="modal__buttom" id="modal__buttom">Aceptar</p>
                </div>
            </dialog>
            <section className="main__recomend" id="main_recomend">
                <form>
                    <div className="containerForm">
                        <h1 className="titleForm">Publicar Producto</h1>
                        <div className="form">
                            <i className="fas fa-times exitForm" id="exitForm" onClick={setFormCheked} ></i>
                            <FirtPart setTitle={setTitle} setDescription={setDescription}/>
                            <br/>
                            <br/>
                            <SecondPart setC1={setC1} setC2={setC2} setC3={setC3}/>
                            <br/>
                            <div className="loadFiles">
                                <input type="file" id="file"/>
                            </div>
                            <br/>
                            <div className="btn-enviar" id="bEnviar" onClick={sendData}>
                                <p className="submit" id="submit">Publicar</p>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Form