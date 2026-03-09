import "./Hero.css"

function Hero(){
    return(
        <section className="hero">
            <div className="hero-content">
                <h1>NeonVision</h1>
                <p>Explore o futuro da tecnologia através de imagens cyberpunk</p>
                <button onClick={() => window.scrollTo({ top: 500, behavior: "smooth", })}>
                    Explorar Galeria
                </button>
            </div>
        </section>
    )
}

export default Hero;