import MainPrincipal from './mainPrincipal.jsx'
import MainRecomend from './mainRecomend/mainRecomend.jsx'

function Main ({setTargId, setCheckedDialog, setCheckedForm}){
    return(
        <> 
        <main id="main">
            <MainPrincipal setCheckedForm={setCheckedForm}/>
            <MainRecomend setTargId={setTargId} setCheckedDialog={setCheckedDialog} id="main__main_recomend"/>
        </main>
        </>
    )
}

export default Main