import React, { useRef, useContext, useReducer, useEffect } from 'react'
import { FormContext, SecondPartContext } from '../../context/FormContext'

function SecondPart() {
  const { secondPartData, setSecondPartData, firstPartData } = useContext(
    SecondPartContext
  )
  const { checkForm, setCheckForm } = useContext(FormContext)

  let characteristic1 = useRef(null)
  let characteristic2 = useRef(null)
  let characteristic3 = useRef(null)

  const initialState = {
    characteristics1: false,
    characteristics2: false,
    characteristics3: false,
    place: false,
  }
  const inputCheckReducer = (state, action) => {
    switch (action.type) {
      case 'CHECK_CHARACTERISTIC_1':
        return {
          ...state,
          characteristics1: action.payload,
        }
      case 'CHECK_CHARACTERISTIC_2':
        return {
          ...state,
          characteristics2: action.payload,
        }
      case 'CHECK_CHARACTERISTIC_3':
        return {
          ...state,
          characteristics3: action.payload,
        }
      case 'CHECK_PLACE':
        return {
          ...state,
          place: action.payload,
        }

      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(inputCheckReducer, initialState)

  const checkCharacteristics1 = (e) => {
    if (
      e.target.value === '' ||
      e.target.value === 'Marca: ' ||
      e.target.value === 'tipo: ' ||
      e.target.value === 'Cpu: ' ||
      e.target.value === 'Tamaño: ' ||
      e.target.value === 'sexo: '
    ) {
      e.target.style.backgroundColor = 'rgb(194, 6, 0)'
      e.target.style.color = 'white'
      dispatch({ type: 'CHECK_CHARACTERISTIC_1', payload: false })
    } else {
      e.target.style.backgroundColor = 'rgb(232, 240, 254)'
      e.target.style.color = 'Black'
      dispatch({ type: 'CHECK_CHARACTERISTIC_1', payload: true })
      setSecondPartData({
        ...secondPartData,
        characteristic1: e.target.value,
      })
    }
  }
  const checkCharacteristics2 = (e) => {
    if (
      e.target.value === '' ||
      e.target.value === 'Condición:' ||
      e.target.value === 'Marca:' ||
      e.target.value === 'Capacidad:' ||
      e.target.value === 'Clasificación:' ||
      e.target.value === 'Condición:'
    ) {
      e.target.style.backgroundColor = 'rgb(194, 6, 0)'
      e.target.style.color = 'white'
      dispatch({ type: 'CHECK_CHARACTERISTIC_2', payload: false })
    } else {
      e.target.style.backgroundColor = 'rgb(232, 240, 254)'
      e.target.style.color = 'Black'
      dispatch({ type: 'CHECK_CHARACTERISTIC_2', payload: true })
      setSecondPartData({
        ...secondPartData,
        characteristic2: e.target.value,
      })
    }
  }
  const checkCharacteristics3 = (e) => {
    if (
      e.target.value === 'Kilometraje:' ||
      e.target.value === 'categoria:' ||
      e.target.value === 'Memoria:' ||
      e.target.value === 'Material:' ||
      e.target.value === 'categoria:'
    ) {
      e.target.style.backgroundColor = 'rgb(194, 6, 0)'
      e.target.style.color = 'white'
      dispatch({ type: 'CHECK_CHARACTERISTIC_3', payload: false })
    } else {
      e.target.style.backgroundColor = 'rgb(232, 240, 254)'
      e.target.style.color = 'Black'
      dispatch({ type: 'CHECK_CHARACTERISTIC_3', payload: true })
      setSecondPartData({
        ...secondPartData,
        characteristic3: e.target.value,
      })
    }
  }
  function checkPlace(e) {
    if (e.target.value === '') {
      e.target.style.backgroundColor = 'rgb(194, 6, 0)'
      e.target.style.color = 'white'
      dispatch({ type: 'CHECK_PLACE', payload: false })
    } else {
      e.target.style.backgroundColor = 'rgb(232, 240, 254)'
      e.target.style.color = 'Black'
      dispatch({ type: 'CHECK_PLACE', payload: true })
      setSecondPartData({
        ...secondPartData,
        place: e.target.value,
      })
    }
  }

  const loadCharacteristics = (date) => {
    if (date === 'Vehiculo') {
      characteristic1.current.value = 'Marca:'
      characteristic2.current.value = 'Condición:'
      characteristic3.current.value = 'Kilometraje:'
    } else if (date === 'Vestimenta') {
      characteristic1.current.value = 'tipo: '
      characteristic2.current.value = 'Marca:'
      characteristic3.current.value = 'categoria:'
    } else if (date === 'Consolas') {
      characteristic1.current.value = 'Cpu:'
      characteristic2.current.value = 'Capacidad:'
      characteristic3.current.value = 'Memoria:'
    } else if (date === 'Juguetes') {
      characteristic1.current.value = 'Tamaño:'
      characteristic2.current.value = 'Clasificación:'
      characteristic3.current.value = 'Material:'
    } else {
      characteristic1.current.value = 'sexo:'
      characteristic2.current.value = 'Condición:'
      characteristic3.current.value = 'categoria:'
    }
  }
  useEffect(() => {
    loadCharacteristics(firstPartData.select)
  }, [firstPartData.select])

  useEffect(() => {
    if (
      state.characteristics1 &&
      state.characteristics2 &&
      state.characteristics3 &&
      state.place
    ) {
      setCheckForm({
        ...checkForm,
        checkedSecondPart: true,
      })
    } else {
      setCheckForm({
        ...checkForm,
        checkedSecondPart: false,
      })
    }
  }, [state])

  return (
    <>
      <div className='segundaParte'>
        <label>
          <p>Ingrese 3 Caracteristicas:</p>
          <br />
          <input
            ref={characteristic1}
            type='text'
            id='inputC1'
            placeholder='primer caracteristica'
            className='inputC1'
            onLoadStart={(e) => {
              loadCharacteristics(e, 1)
            }}
            onBlur={checkCharacteristics1}
          />
        </label>
        <br />
        <label>
          <input
            ref={characteristic2}
            type='text'
            id='inputC2'
            placeholder='segunda caracteristica'
            className='inputC2'
            onLoad={(e) => {
              loadCharacteristics(e, 2)
            }}
            onBlur={checkCharacteristics2}
          />
        </label>
        <br />
        <label>
          <input
            ref={characteristic3}
            type='text'
            id='inputC3'
            placeholder='tercer caracteristica'
            className='inputC3'
            onBlur={checkCharacteristics3}
          />
        </label>
        <br />
        <label className='inputPlace'>
          <p>Ingrese su ubicación</p>
          <br />
          <input
            type='text'
            id='inputPlace'
            placeholder='Ingrese Ubicación'
            className='inputPlace'
            onBlur={checkPlace}
          />
        </label>
      </div>
    </>
  )
}

export default SecondPart
