import HeaderBanner from './headerBanner.jsx'
import HeaderLogo from './headerLogo.jsx'
import HeaderPublicar from './headerPublicar.jsx'

function Header (){
    return(
        <>
        <header className="header">
            <HeaderBanner />
            <HeaderLogo />
            <br/>
            <HeaderPublicar/>
        </header>

        </>
    )
}

export default Header