

function SubFooter (){
    return( 
        <div className="footer__subfooter">
            <div className="subfooter__categorias">
                <h6>Categorías Populares</h6>
                <p>Carros</p>
                <p>Propiedades</p>
                <p>Celulares</p>
            </div>
            <br/>
            <div className="subfooter__integrantes">
                <h6>Integrantes</h6>
                <p>Daniel Mateo Largo <br/>Roldan</p>
                <br/>
                <p>Jarrison Camilo Cano<br/> Misas</p>
                
            </div>
            <br/>
            <div className="subfooter__seguinos">
                <h6>Seguinos</h6>
                <a href="https://www.facebook.com/danielmateo.largoroldan" target="_blank" rel="noreferrer">
                    <img src="./img/Redes/facebook.png" alt="Facebook"/>
                </a>
                <a href="https://www.instagram.com/mateolargo_r/" target="_blank" rel="noreferrer">
                    <img src="./img/Redes/instagram.png" alt="Instagram"/>
                </a>
                <br/>
                <br/>
                <a href="https://twitter.com/JarrisonCano" target="_blank" rel="noreferrer">
                    <img src="./img/Redes/twitter.png" alt="Twitter"/>
                </a>
                <a href="https://www.instagram.com/jarrisoncanom/" target="_blank" rel="noreferrer">
                    <img src="./img/Redes/instagram.png" alt="Instagram"/>
                </a>
            </div>
        </div>
    )
}

export default SubFooter