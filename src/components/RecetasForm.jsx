import { useState } from "react"

const RecetasForm = ({addReceta}) => {

    const [ingredientes, setIngredientes] = useState([])

    const submitReceta = (event) => {
        event.preventDefault()
        const form = event.target
        let recetaTemp = {}
        if(ingredientes.length === 0){
            alert('Debe agregar al menos un ingrediente')
        }
        else{
            recetaTemp.nombre = form[0].value
            recetaTemp.costo = form[1].value
            recetaTemp.imagen = form[2].value
            recetaTemp.ingredientes = ingredientes

            addReceta(recetaTemp)
            
            form.reset()
            setIngredientes([])
        }
    }

    const agregarIngrediente = (event) => {
        event.preventDefault()
        const form = event.target
        let ingredientesTemp = structuredClone(ingredientes)
        ingredientesTemp.push(
            {
                'nombre': form[0].value, 
                'cantidad': form[1].value,
            }
        )
        setIngredientes(ingredientesTemp)
        form.reset()
    }

    return(
        <section id="receta-form">
            <form onSubmit={submitReceta}>
                <div className="row m-5">
                    <div className="col-4">
                        <label className="form-label">Nombre de receta</label>
                        <input type="text" className="form-control" id="nombre" required></input>
                    </div>
                    <div className="col-4">
                        <label className="form-label">Costo en pesos</label>
                        <input type="text" className="form-control" id="costo" required></input>
                    </div>
                    <div className="col-4">
                        <label className="form-label">Imágen</label>
                        <input type="text" className="form-control" id="imagen" required></input>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Guardar Receta</button>
            </form>
            <form onSubmit={agregarIngrediente}>
                <div className="row m-5 justify-content-md-center">
                    <div className="col-3">
                        <label className="form-label">Ingrediente</label>
                        <input type="text" className="form-control" id="nombreingrediente" required></input>
                    </div>
                    <div className="col-3">
                        <label className="form-label">Cantidad</label>
                        <input type="text" className="form-control" id="cantidad" required></input>
                    </div>
                    <div className="col-2 d-flex align-items-end">
                        <button type="submit" className="btn btn-primary">Agregar Ingrediente</button>
                    </div>
                </div>
            </form>
            <div className="row justify-content-md-center">
                <div className="col-4">
                    <ul className="list-group">
                        {
                            ingredientes.map((ingrediente, index) => {
                                return(
                                    <li className="list-group-item" key={index}>{ingrediente.nombre} - {ingrediente.cantidad}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default RecetasForm