import { useContext } from 'react'
// import ModalBox from '../modal box/modalBox'
import Button from '../button/button'
import { targInf } from '../targInf.json'
import { useParams, Link } from 'react-router-dom'
import { CounterContext } from '../../context/CounterContext'

function Dialog() {
  let { counter } = useContext(CounterContext)
  let { id } = useParams()
  id = parseInt(id)

  const handleButtons = (direction) => {
    if (direction === 'right') {
      if (id === counter) return 1
      return id + 1
    }

    if (direction === 'left') {
      if (id === 1) return counter
      return id - 1
    }
  }

  return (
    <>
      <dialog id='dialog' className='dialog'>
        <div className='dialog__container'>
          <div className='container__img'>
            <img src={targInf[id - 1].urlImage} alt='Producto' />
          </div>
          <div className='container__inf'>
            <h3>{targInf[id - 1].title}</h3>
            <p className='price'>{targInf[id - 1].price}</p>
            <p className='description'>{targInf[id - 1].description}</p>
            <p className='property'></p>
            <div className='container__buy'>
              <Button
                classes='buy__buttom'
                content='Comprar'
                iconClass='fas fa-shopping-cart'
              />
              <div className='buy__arrows'>
                <Link to={`/${handleButtons('left')}`}>
                  <Button classes='fas fa-arrow-left arrow' content='' />
                </Link>
                <Link to={`/${handleButtons('right')}`}>
                  <Button classes='fas fa-arrow-right arrow' content='' />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link to='/'>
          <p className='container__exit'>
            <i className='fas fa-times exit'></i>
          </p>
        </Link>
      </dialog>
    </>
  )
}

export default Dialog
