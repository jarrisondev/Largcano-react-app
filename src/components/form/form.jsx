import React, { useState, useRef, useContext } from 'react'
import FirstPart from './firstPart.jsx'
import SecondPart from './secondPart.jsx'
import Button from '../button/button'
import { Link } from 'react-router-dom'
import { targInf } from '../targInf.json'
import { CounterContext } from '../../context/CounterContext'
import {
  FormContext,
  FirstPartContext,
  SecondPartContext
} from '../../context/FormContext'

function Form ({ setCounter }) {
  const date = new Date()
  const { counter } = useContext(CounterContext)
  let data

  const initialCheckedParts = {
    checkedFirstPart: false,
    checkedSecondPart: false,
    checkedImg: false
  }
  // initial data parts
  const initialFirtsPartData = {
    select: 'Vehiculo',
    title: '',
    description: '',
    price: ''
  }
  const initialSecondPartData = {
    characteristic1: '',
    characteristic2: '',
    characteristic3: '',
    place: ''
  }

  const [checkForm, setCheckForm] = useState(initialCheckedParts)
  const [firstPartData, setFirstPartData] = useState(initialFirtsPartData)
  const [secondPartData, setSecondPartData] = useState(initialSecondPartData)

  // let [checkedModalBox, setCheckedModalBox] = useState(false)

  const months = [
    'ENE',
    'FEB',
    'MAR',
    'ABR',
    'MAY',
    'JUN',
    'JUL',
    'AGO',
    'SEPT',
    'OCT',
    'NOV',
    'DIC'
  ]
  const imgRef = useRef(null)

  function saveImg () {
    const token = checkImg()
    if (token) {
      const reader = new window.FileReader()
      reader.addEventListener('load', () => {
        window.localStorage.setItem(counter + 1, reader.result)
      })
      reader.readAsDataURL(imgRef.current.files[0])
    }
  }
  function saveData () {
    data = {
      id: targInf.length + 1,
      urlImage: window.localStorage.getItem(counter + 1),
      title: firstPartData.title,
      price: `COP ${firstPartData.price}`,
      description: firstPartData.description,
      property: `<ul><li>${secondPartData.characteristic1}</li><li>${secondPartData.characteristic2}</li><li>${secondPartData.characteristic3}</li></ul>`,
      date: `${date.getDate()} ${months[date.getMonth()]}`,
      place: secondPartData.place,
      element1: firstPartData.title,
      element2: ''
    }
  }
  function checkImg () {
    if (imgRef.current.files.length === 1) {
      if (imgRef.current.files[0].size <= 1478036) {
        setCheckForm({
          ...checkForm,
          checkedImg: true
        })
        return true
      } else {
        setCheckForm({
          ...checkForm,
          checkedImg: false
        })
        return false
      }
    } else {
      setCheckForm({
        ...checkForm,
        checkedImg: false
      })
      return false
    }
  }
  function sendData () {
    if (
      checkForm.checkedFirstPart &&
      checkForm.checkedSecondPart &&
      checkForm.checkedImg
    ) {
      saveData()
      targInf.push(data)
      setCounter(counter + 1)
      setCheckForm(initialCheckedParts)
    } else {
      // active the modal
    }
  }

  return (
    <>
      {/* {checkedModalBox ? <ModalBox content="Rellene los Campos Correctamente" on={setCheckedModalBox}/> : null} */}
      <section className='main__recomend'>
        <form>
          <div className='containerForm'>
            <h1 className='titleForm'>Publicar Producto</h1>
            <div className='form'>
              <FormContext.Provider value={{ checkForm, setCheckForm }}>
                <div className='form__containerExit'>
                  <Link to='/'>
                    <i className='fas fa-times containerExit__exit' />
                  </Link>
                </div>
                <div className='form__containerInputs'>
                  <FirstPartContext.Provider
                    value={{ firstPartData, setFirstPartData }}
                  >
                    <FirstPart />
                  </FirstPartContext.Provider>
                  <br />
                  <SecondPartContext.Provider
                    value={{
                      secondPartData,
                      setSecondPartData,
                      firstPartData
                    }}
                  >
                    <SecondPart />
                  </SecondPartContext.Provider>
                </div>
                <br />
                <div className='loadFiles'>
                  <input ref={imgRef} type='file' onChange={saveImg} />
                </div>

                {checkForm.checkedFirstPart &&
                  checkForm.checkedSecondPart &&
                  checkForm.checkedImg && (
                    <Link to='/' onClick={sendData}>
                      <Button classes='btn-enviar' content='Publicar' />
                    </Link>
                )}

                {!checkForm.checkedFirstPart || !checkForm.checkedSecondPart || !checkForm.checkedImg
                  ? (
                    <Link to='/form'>
                      <Button classes='btn-enviar' content='Publicar' />
                    </Link>
                    )
                  : (
                      ''
                    )}
              </FormContext.Provider>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default Form
