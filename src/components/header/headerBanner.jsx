import React from 'react'

function HeaderBanner(){
    
    let images=["./img/Banner/3.jpg", "./img/Banner/1.jpg", "./img/Banner/2.jpg"]
    let indiceImg = 0
    
    function changeImageBanner(){
        document.sliderBanner.src = images[indiceImg]

        if (indiceImg < 2)indiceImg++
        else indiceImg = 0
    }
    
    return(
        <>
        <div className="header__banner">
            <img name="sliderBanner" src="./img/Banner/2.jpg" alt="Banner" onClick={changeImageBanner}/>
        </div>
        </>
    )
}

export default HeaderBanner