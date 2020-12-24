import MainPrincipal from './mainPrincipal.jsx'
import MainRecomend from './mainRecomend/mainRecomend.jsx'

function Main ({setTargId, setChekedDialog}){
    return(
        <> 
        <main id="main">
            <MainPrincipal />
            <MainRecomend setTargId={setTargId} setChekedDialog={setChekedDialog} id="main__main_recomend"/>
        </main>
        </>
    )
}

export default Main