import "./About.css"

function About(){
    return(
        <section className="about">
            <h2 className="about-title">Sobre o NeonVision</h2>

            <p className="about-description">
                NeonVision é uma galeria visual inspirada em cidades futuristicas,
                tecnologia avançada e o universo cyberpunk. O projeto explora
                cenários imaginando como será o mundo no futuro, com inovação,
                inteligência artificial e ambientes iluminados por neon.
            </p>

            <div className="about-cards">

                <div className="about-card">
                    <h3>Cidades Futuristicas</h3>
                    <p>
                        Explore metrópoles tecnológicas com arranha-céus gigantes,
                        drones e iluminação neon.
                    </p>
                </div>

                <div className="about-card">
                    <h3>Tecnologia</h3>
                    <p>
                        Interfaces holográficas, inteligência artificial e avanços
                        que imaginam o futuro da inovação.
                    </p>
                </div>

                <div className="about-card">
                    <h3>Cyberpunk</h3>
                    <p>
                        Um universo visual inspirado em ficção científica,
                        tecnologia e estética cyberpunk.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;