import { useEffect, useContext, useReducer } from 'react'
import { FormContext, FirstPartContext } from '../../context/FormContext'

function FirtPart() {
  //this initial state is used in the reducer
  //its function is checking the input
  let initialState = {
    title: false,
    description: false,
    price: false,
  }
  //context of firstPart and checkForm
  const { checkForm, setCheckForm } = useContext(FormContext)
  const { firstPartData, setFirstPartData } = useContext(FirstPartContext)

  //reducer for save the token of the inputs
  const inputCheckReducer = (state, action) => {
    switch (action.type) {
      case 'CHECK_TITLE':
        return {
          ...state,
          title: action.payload,
        }

      case 'CHECK_DESCRIPTION':
        return {
          ...state,
          description: action.payload,
        }

      case 'CHECK_PRICE':
        return {
          ...state,
          price: action.payload,
        }

      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(inputCheckReducer, initialState)

  const checkTitle = (e) => {
    if (e.target.value === '') {
      e.target.style.backgroundColor = 'rgb(194, 6, 0)'
      e.target.style.color = 'white'
      dispatch({ type: 'CHECK_TITLE', payload: false })
    } else {
      e.target.style.backgroundColor = 'rgb(232, 240, 254)'
      e.target.style.color = 'Black'
      setFirstPartData({
        ...firstPartData,
        title: e.target.value,
      })
      dispatch({ type: 'CHECK_TITLE', payload: true })
    }
  }
  const checkDescription = (e) => {
    if (e.target.value === '') {
      e.target.style.backgroundColor = 'rgb(194, 6, 0)'
      e.target.style.color = 'white'
      dispatch({ type: 'CHECK_DESCRIPTION', payload: false })
    } else {
      e.target.style.backgroundColor = 'rgb(232, 240, 254)'
      e.target.style.color = 'Black'
      setFirstPartData({
        ...firstPartData,
        description: e.target.value,
      })
      dispatch({ type: 'CHECK_DESCRIPTION', payload: true })
    }
  }
  const checkPrice = (e) => {
    if (e.target.value === '') {
      e.target.style.backgroundColor = 'rgb(194, 6, 0)'
      e.target.style.color = 'white'
      dispatch({ type: 'CHECK_PRICE', payload: false })
    } else {
      e.target.style.backgroundColor = 'rgb(232, 240, 254)'
      e.target.style.color = 'Black'
      setFirstPartData({
        ...firstPartData,
        price: e.target.value,
      })
      dispatch({ type: 'CHECK_PRICE', payload: true })
    }
  }

  //send token if all inputs in this file are check or not
  useEffect(() => {
    if (state.title && state.description && state.price) {
      setCheckForm({
        ...checkForm,
        checkedFirstPart: true,
      })
    } else {
      setCheckForm({
        ...checkForm,
        checkedFirstPart: false,
      })
    }
  }, [state])

  return (
    <>
      <div className='primeraParte'>
        <label>
          <p>Seleccionar categoria:</p>
          <br />
          <select
            className='primera_parte__select'
            onChange={(e) =>
              setFirstPartData({ ...firstPartData, select: e.target.value })
            }
          >
            <option value='Vehiculo'>Vehiculo</option>
            <option value='Vestimenta'>Vestimenta</option>
            <option value='Consolas'>Consolas</option>
            <option value='Juguetes'>Juguetes</option>
            <option value='ascesorios'>Ascesorios</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          <p>Ingrese Un Titulo:</p>
          <br />
          <input type='text' placeholder='ingrese Titulo' onBlur={checkTitle} />
        </label>
        <br />
        <br />
        <label className='labelDescription'>
          Ingrese Una Descripción:
          <textarea
            className='description'
            placeholder='ingrese descripción'
            onBlur={checkDescription}
          ></textarea>
        </label>
        <br />
        <br />
        <label>
          <p>Ingrese El Precio:</p>
          <br />
          <input type='text' placeholder='Ej 43,239,482' onBlur={checkPrice} />
        </label>
      </div>
    </>
  )
}

export default FirtPart
