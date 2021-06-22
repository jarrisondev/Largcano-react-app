import React from 'react'
import Targ from './targ.jsx'
import { targInf } from '../../targInf.json'
import { Link } from 'react-router-dom'

function MainRecomend ({ setTargId, setCheckedDialog }) {
  return (
    <>
      <section className='main__recomend' id='main__recomend'>
        <p className='recomend__text'>Recomendaciones</p>
        <div className='recomend__targ'>
          {targInf.map((object) => (
            <Link to={`/${object.id}`} key={object.id}>
              <Targ
                url={object.urlImage}
                price={object.price}
                element1={object.element1}
                element2={object.element2}
                place={object.place}
                date={object.date}
                id={object.id}
                setTargId={setTargId}
                setCheckedDialog={setCheckedDialog}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default MainRecomend
