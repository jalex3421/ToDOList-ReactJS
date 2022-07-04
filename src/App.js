import './App.css';
import freeCodeCampLogo from './imagenes/logo.png'
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="aplicacion-tareas">
        <div className='freecodecamp-logo-contenedor'>
          <img 
            src={freeCodeCampLogo}
            alt = "logo" 
            className='freecodecamp-logo' />
        </div>
        <div className='tareas-lista-principal'>
          <h1>To Do List</h1>
            <ListaDeTareas />
        </div>
    </div>
  );
}

export default App;
