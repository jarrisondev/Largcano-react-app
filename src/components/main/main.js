import MainPrincipal from './mainPrincipal.js'
import MainRecomend from './mainRecomend/mainRecomend.js'

function Main ({setTargId, setClassDialog}){
    return(
        <>
        <main>
            <MainPrincipal />
            <MainRecomend setTargId={setTargId} setClassDialog={setClassDialog}/>
        </main>
        </>
    )
}

export default Main