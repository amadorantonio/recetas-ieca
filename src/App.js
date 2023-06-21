import { useEffect, useState } from "react"
import './App.css';
import RecetasList from './components/RecetasList'
import RecetasForm from "./components/RecetasForm";

const App = () => {

  const [recetas, setRecetas] = useState([
    {
        nombre: 'Receta 1',
        costo: 100,
        imagen: 'https://cocinamia.com.mx/wp-content/uploads/2020/11/ENSALADA-1100x500.jpg',
        ingredientes: [
          {
            nombre: 'Apio',
            cantidad: '12 oz'
          },
          {
            nombre: 'Manzana',
            cantidad: '0.5 Kg'
          }
        ] 
    },     
  ])

  const addReceta = (receta) => {
    console.log("🚀 ~ file: App.js:27 ~ addReceta ~ receta:", receta)
    let recetaTemp = structuredClone(recetas)
    recetaTemp.push(receta)
    setRecetas(recetaTemp)
  }
  
  return (
    <div className="App">
      <div className='row'>
        <div className="col">
          <p className='h1'>Aplicación de recetas Juan Antonio Amador Barajas - IECA</p>
        </div>
      </div>
      <div className="col">
        <p className='h2 mt-5'>Alta de recetas</p>
      </div>
      <RecetasForm addReceta={addReceta}></RecetasForm>
      <div className="col">
        <p className='h2 mt-5'>Lista de recetas</p>
      </div>
      <RecetasList recetas={recetas}></RecetasList>
    </div>
  );
}

export default App;
