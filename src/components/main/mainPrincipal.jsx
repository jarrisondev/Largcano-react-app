import { useEffect, useState } from 'react'
import Button from '../button/button'
import { Link } from 'react-router-dom'

function MainPrincipal() {
  let [indice, setIndice] = useState(1)

  const changeImageMain = () => {
    if (indice <= 3) setIndice(indice++)
    else setIndice(1)
  }

  useEffect(() => {
    const interval = setInterval(changeImageMain, 3000)
    return () => clearInterval(interval)
  })

  return (
    <>
      <section className='main__principal' id='main__principal'>
        <div className='principal__boxText'>
          <h3 className='boxText__title'>¡Bienvenidos a LargCano!</h3>
          <p className='boxText__description'>
            Bienvenidos a LargCano, lider en anuncios clasificados, ecuentras
            desde Vehiculos, hogares, vestimentas, asccesorios, tecnología,
            hasta juguetes. <br /> Busca, compra y vente cerca de ti.
          </p>
          <br />
          <Link to='/form'>
            <Button classes='boxText__button' content='Publica un articulo' />
          </Link>
        </div>
        <br />
        <div className='principal__image'>
          <img src={`./img/main/${indice}.svg`} alt='principal' />
        </div>
      </section>
    </>
  )
}

export default MainPrincipal
