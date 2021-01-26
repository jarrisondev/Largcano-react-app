import MainPrincipal from './mainPrincipal.jsx'
import MainRecomend from './mainRecomend/mainRecomend.jsx'

function Main ({setTargId, setChekedDialog, setCheckedForm}){
    return(
        <> 
        <main id="main">
            <MainPrincipal setCheckedForm={setCheckedForm}/>
            <MainRecomend setTargId={setTargId} setChekedDialog={setChekedDialog} id="main__main_recomend"/>
        </main>
        </>
    )
}

export default Main