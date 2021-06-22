import { useContext } from 'react'
import { CounterContext } from '../../context/CounterContext'
import { Link } from 'react-router-dom'
import Button from '../button/button'

function HeaderPublicar () {
  const { checkedMode, setCheckedMode } = useContext(CounterContext)

  const HandleCheckTheme = (e) => {
    setCheckedMode(e.target.checked)
  }

  return (
    <>
      <div className='header__publicar_check'>
        <input
          checked={checkedMode}
          id='checktheme'
          type='checkBox'
          className='publicar_check__check'
          onChange={HandleCheckTheme}
        />
        <label
          htmlFor='checktheme'
          className='publicar_check__checkLabel'
        />
        <Link to='/form'>
          <Button
            classes='publicar_check__publicar'
            content='Publica un articulo'
          />
        </Link>
      </div>
    </>
  )
}

export default HeaderPublicar
