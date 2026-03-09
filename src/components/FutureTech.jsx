import "./FutureTech.css"

function FutureTech(){
    return(
        <section className="future-tech">
            <h2 className="future-title">Tecnologias do Futuro</h2>

            <div className="future-container">

                <div className="future-card">
                    <h3>⚙️ Inteligência Artificial</h3>
                    <p>
                        Sistemas capazes de aprender, analisar dados e tomar decisões
                        inteligentes, revolucionando diversas áreas da tecnologia.
                    </p>
                </div>

                <div className="future-card">
                    <h3>🧠 Neural Networks</h3>
                    <p>
                        Redes neurais inspiradas no cérebro humano que permitem avanços
                        incríveis em reconhecimento de imagens, voz e aprendizado profundo.
                    </p>
                </div>

                <div className="future-card">
                    <h3>🌆 Cyber City</h3>
                    <p>
                        Cidades futuristas altamente conectadas, com automação,
                        sensores inteligentes e infraestrutura digital avançada.
                    </p>
                </div>

                <div className="future-card">
                    <h3>🚀 Space Tech</h3>
                    <p>
                        Tecnologia espaciais que impulsionam exploração, satélites
                        inteligentes e novas fronteiras para a humanidade.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FutureTech;