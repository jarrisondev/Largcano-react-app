import React, {useEffect} from 'react'
import Button from '../button/button'

function MainPrincipal({setCheckedForm}) {

    let indiceMain = 0
    
    function changeImageMain(){
        let imagesMain = ["./img/main/2.svg", "./img/main/3.svg", "./img/main/1.svg"]
        
        document.sliderMain.src = imagesMain[indiceMain]

        if(indiceMain < 2) indiceMain++
        else indiceMain = 0
    }

    useEffect(()=>{
        const interval = setInterval(changeImageMain, 3000);
        return(()=>{
            clearInterval(interval)
        })
    })

    return(
        <>
        <section className="main__principal" id="main__principal">
            <div className="principal__boxText">
                <h3 className="boxText__title">
                    ¡Bienvenidos a LargCano!
                </h3>
                <p className="boxText__description">
                    Bienvenidos a LargCano, lider en anuncios clasificados, ecuentras desde Vehiculos, hogares, vestimentas, asccesorios, tecnología, hasta juguetes. <br/> Busca, compra y vente cerca de ti. 
                </p>
                <br/>
                < Button classes="boxText__button" on={setCheckedForm} content="Publica un articulo" boolean={true}/>
            </div>
            <br/>
            <div className="principal__image">
                <img name="sliderMain" src="./img/main/1.svg" alt="principal"/>
            </div>
        </section>
        </>
    )
}

export default  MainPrincipal