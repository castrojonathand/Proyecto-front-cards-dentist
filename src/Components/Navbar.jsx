import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {

  const [isOpen,setIsOpen] = useState(false)
  const {dataState, dataDispatch} = useContextGlobal()
  const navigate = useNavigate()

  const changeTheme=()=>{
    dataDispatch({type: 'CHANGE_THEME', payload: !dataState.theme})
  }
  return (   
    
    <nav className={dataState.theme ? 'navBar':'dark'}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* <link to="/"  */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className='navigate'>
        
        <button className='buttonNav' onClick={()=> navigate(-1)}> « </button>
        <button className='buttonNav' onClick={()=> navigate(1)}>»</button> 
        <img src='/images/DH.png' alt='DH-logo' />
      </div>
      
      <div className={`link ${isOpen && "open"}`}>
        <Link to="/home"> <h3>Home</h3></Link>
        <Link to="/contact"> <h3>Contact</h3></Link>  
        <Link to="/favs"> <h3>Favs</h3></Link>
      </div>
      
      <div className='navToggle'>

        <div className={`hamburg ${isOpen && "open"}`} onClick={()=> setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>        
        <div>
          <img src='/images/DH.png' alt='DH-logo' />
        </div>
      </div>

      <button onClick={changeTheme} style={{
        marginRight:'50px', 
        fontSize:'20px',
        borderRadius:'10px',
        padding:'10px'
        }}>Change theme</button> 
    <script src="https://kit.fontawesome.com/f51f58ac97.js" crossorigin="anonymous"></script>
    </nav>
    
  )
}

export default Navbar