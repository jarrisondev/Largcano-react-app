import React, {useState, useRef } from 'react'
import FirtPart from './firtPart.jsx'
import SecondPart from "./secondPart.jsx"
import Button from '../button/button'
import ModalBox from '../modal box/modalBox'
import {targInf} from '../targInf.json'

function Form ({setCheckedForm}){
    let date = new Date()
    let [checkedModalBox, setCheckedModalBox] = useState(false)
    let [checkedFirtPart, setCheckedFirtPart] = useState(false)
    let [checkedSecondPart, setCheckedSecondPart] = useState(false)
    let [checkedImg, setCheckedImg] = useState(false)

    let [selectValue, setSelectValue] = useState('Vehiculo')

    let months = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEPT','OCT','NOV','DIC']
    //dates for the new target
    let [cont, setCont] = useState(11 + localStorage.length)
    let [title, setTitle] = useState(" ")
    let [description, setDescription] = useState("")
    let [c1, setC1] = useState("")
    let [c2, setC2] = useState("")
    let [c3, setC3] = useState("")
    let [place, setPlace] = useState("")
    let [price, setPrice] = useState("")
    
    let imgRef = useRef(null)

    function saveImg(){

            let token = checkImg()

            if (token) {
                const reader = new FileReader()
        
                reader.addEventListener('load', ()=>{
                    localStorage.setItem(cont, reader.result)
                    setCont(cont+1)
                })
                reader.readAsDataURL(imgRef.current.files[0])
            }
    }

    function sendData() {
        if(checkedFirtPart && checkedSecondPart && checkedImg){
            targInf.push(data) 
            setCheckedForm(false)
        }else{
            setCheckedModalBox(true)
        }
    }

    function checkImg(){
        if(imgRef.current.files.length===1){
            if(imgRef.current.files[0].size <= 1478036){
                setCheckedImg(true)
                return true
            }else{
                setCheckedImg(false)
                return false
            }
        } else {
            setCheckedImg(false)
            return false
        } 
    }

    // object with save the data for push to the targInf
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
            {checkedModalBox ? <ModalBox content="Rellene los Campos Correctamente" on={setCheckedModalBox}/> : null}
            <section className="main__recomend" id="main_recomend">
                <form method="get">
                    <div className="containerForm">
                        <h1 className="titleForm">Publicar Producto</h1>
                        <div className="form">
                            <div className="form__containerExit">
                                <i className="fas fa-times containerExit__exit" onClick={()=> setCheckedForm(false)} ></i>
                            </div>
                           <div className="form__containerInputs">
                                <FirtPart setTitle={setTitle} setDescription={setDescription} setPrice={setPrice} setSelectValue={setSelectValue} setCheckedFirtPart={setCheckedFirtPart}/>
                                <br/>
                                <SecondPart setC1={setC1} setC2={setC2} setC3={setC3} setPlace={setPlace} selectValue={selectValue} setCheckedSecondPart={setCheckedSecondPart}/>
                           </div>
                            <br/>
                            <div className="loadFiles">
                                <input ref={imgRef} type="file" id="file" onChange={saveImg}/>
                            </div> 
                            <Button classes="btn-enviar" on={sendData} content="Publicar" boolean={true}/>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Form