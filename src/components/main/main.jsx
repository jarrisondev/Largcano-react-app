import MainPrincipal from './mainPrincipal.jsx'
import MainRecomend from './mainRecomend/mainRecomend.jsx'

function Main ({setTargId, setClassDialog}){
    return(
        <> 
        <main>
            <MainPrincipal />
            <MainRecomend setTargId={setTargId} setClassDialog={setClassDialog} id="main__main_recomend"/>
        </main>
        </>
    )
}

export default Main