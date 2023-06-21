import RecetaItem from "./RecetaItem"

const RecetasList = ({recetas}) => {
    return(
        <section id="recetas-list">
            <div className="row m-5">
                {
                    recetas.map((receta, index) => {
                        return(
                            <RecetaItem item={receta} key={index}></RecetaItem>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default RecetasList