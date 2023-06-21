const RecetaItem = ({item, index}) => {    
    return(
        <div className="col-3">
            <div className="card">
                <img src={item.imagen} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">Costo: ${item.costo}</p>
                    <p className="card-text">Ingreditenes:</p>
                    <ul className="list-group list-group-flush">
                        {
                            item.ingredientes.map((ingrediente, index) => {
                                return(
                                    <li className="list-group-item" key={index}>{ingrediente.nombre} ({ingrediente.cantidad})</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RecetaItem