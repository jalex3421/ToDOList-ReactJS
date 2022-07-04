import React , {useState} from 'react'
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from './Tarea';

function ListaDeTareas(){

const[tareas, setTareas] = useState([]);

const agregarTarea = tarea => {
	
	if(tarea.texto.trim()){
		console.log("here");
		//trim: remove blank spaces bef. and after string
		tarea.texto=tarea.texto.trim();
		//add element at the beggining of the array
		const tareasActualizadas = [tarea,...tareas];
		setTareas(tareasActualizadas);
	}
}

const eliminarTarea = id => {
	//if the id is different the element is added to the array 
	const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
	setTareas(tareasActualizadas);
}

const completarTarea = id => {
	const tareasActualizadas = tareas.map(tarea => {
		if(tarea.id === id){
			tarea.completada = !tarea.completada;
		}
		//map need to return a value
		return tarea;
	});
	setTareas(tareasActualizadas);
}

	return(
		//Fragments: empty structures
		<>
			<TareaFormulario onSubmit={agregarTarea} />
			<div className='tareas-lista-contenedor'>
				{
					//iterate through each element and perform a certain action
					tareas.map((tarea)=>
						<Tarea 
							key={tarea.id}
							id={tarea.id}
							texto={tarea.texto}
							completada={tarea.completada}
							completarTarea={completarTarea}
							eliminarTarea={eliminarTarea} />
					)
				}
			</div>
		</>
	);
}

export default ListaDeTareas;