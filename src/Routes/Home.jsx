
// import Card from '../Components/Card'
import { useGlobalContext } from '../Components/utils/global.context'
import Card from '../Components/Card'


// import { Link } from 'react-router-dom'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {  
  
  const {dataState}= useGlobalContext()
  let toggle = true
  
  return (
    <main className={dataState.theme ? 'light':'dark'}>
      <h1 style={{marginBottom:0}}>Home</h1>
      <h3> (click on the card to see details)</h3>

      <div className='card-grid'>         
        {/* Aqui deberias renderizar las cards */}        
        {dataState.listData.map(list => <div key = {list.id}>                
          <Card name={list.name} username={list.username} id={list.id} toggle={toggle}/>
        </div> )}       
      </div>
    </main>
  )

}
export default Home