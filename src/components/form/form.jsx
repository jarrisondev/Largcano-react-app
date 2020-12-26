import React, {useState, useRef} from 'react'
import FirtPart from './firtPart.jsx'
import SecondPart from "./secondPart.jsx"
import {targInf} from '../targInf.json'

function Form ({setCheckedForm}){
    let date = new Date()

    let months = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEPT','OCT','NOV','DIC']

    //states
        //cont that define the name of img for save in localstorage
    let [cont, setCont] = useState(9 + localStorage.length)
        //title, description
    let [title, setTitle] = useState(" ")
    let [description, setDescription] = useState("")
        //caracteristics
    let [c1, setC1] = useState("")
    let [c2, setC2] = useState("")
    let [c3, setC3] = useState("")
        //place
    let [place, setPlace] = useState("")
    let [price, setPrice] = useState("")
    let img = useRef("")

    function setFormCheked(){
        setCheckedForm(false)
    }
    function sendData(){
        targInf.push(data)
        setCheckedForm(false)
    }
    function saveImg(){
        const reader = new FileReader()

        reader.addEventListener('load', ()=>{
            localStorage.setItem(cont, reader.result)
            setCont(cont+1)
        })

        reader.readAsDataURL(img.current.files[0])
    }

    let data = {
        "id": (targInf.length + 1),
        "urlImage": localStorage.getItem(cont-1) ,
        "title": title,
        "price": `COP ${price}`,
        "description": description,
        "property":`<ul><li>${c1}</li><li>${c2}</li><li>${c3}</li></ul>`,
        "date": `${date.getDate()} ${months[date.getMonth()]}`,
        "place":place,
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
                            <FirtPart setTitle={setTitle} setDescription={setDescription} setPrice={setPrice}/>
                            <br/>
                            <br/>
                            <SecondPart setC1={setC1} setC2={setC2} setC3={setC3} setPlace={setPlace}/>
                            <br/>
                            <div className="loadFiles">
                                <input ref={img} type="file" id="file" onChange={saveImg}/>
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