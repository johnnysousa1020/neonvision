import { useState, useEffect } from "react";
import "./Stats.css"

function Stats(){
    const [images, setImages] = useState(0)
    const [categorias, setCategorias] = useState(0)
    const [explore, setExplore] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setImages((prev) => (prev < 200 ? prev + 5 : 200))
            setCategorias((prev) => (prev < 10 ? prev + 1 : 10))
            setExplore((prev) => (prev < 1000 ? prev + 20 : 1000))
        }, 30)

        return () => clearInterval(interval)
    }, [])


    return(
        <section className="stats">
            <h2 className="stats-title">NeonVision em Números</h2>

            <div className="stats-container">

                <div className="stat-cardd">
                    <h3>{images}</h3>
                    <p>Imagens Futuristicas</p>
                </div>

                <div className="stat-cardd">
                    <h3>{categorias}</h3>
                    <p>Categorias</p>
                </div>

                <div className="stat-cardd">
                    <h3>{explore}</h3>
                    <p>Explorações</p>
                </div>
            </div>
        </section>
    )
}

export default Stats;