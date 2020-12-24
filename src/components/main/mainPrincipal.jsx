import React from 'react'

function MainPrincipal() {

    let imagesMain = ["./img/main/2.svg", "./img/main/3.svg", "./img/main/1.svg"]
    let indiceMain = 0

    function changeImageMain(){
        document.sliderMain.src = imagesMain[indiceMain]

        if(indiceMain < 2) indiceMain++
        else indiceMain = 0
    }

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
            </div>
            <br/>
            <div className="principal__image">
                <img name="sliderMain" src="./img/main/1.svg" onClick={changeImageMain} alt=""/>
            </div>
        </section>
        </>
    )
}

export default  MainPrincipal