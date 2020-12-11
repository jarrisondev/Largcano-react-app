import HeaderBanner from './headerBanner.js'
import HeaderLogo from './headerLogo'
import HeaderPublicar from './headerPublicar'

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