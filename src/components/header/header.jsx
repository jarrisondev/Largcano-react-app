import HeaderBanner from './headerBanner.jsx'
import HeaderLogo from './headerLogo.jsx'
import HeaderPublicar from './headerPublicar.jsx'

function Header ({setCheckedForm}){
    return(
        <>
        <header className="header">
            <HeaderBanner />
            <HeaderLogo />
            <br/>
            <HeaderPublicar setCheckedForm={setCheckedForm} />
        </header>

        </>
    )
}

export default Header