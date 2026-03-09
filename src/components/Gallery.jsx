import "./Gallery.css"

function Gallery({ imagens, setSelectedImage }){

    if(imagens.length === 0){
        return(
            <div className="no-results-galerry">
                <h2>🔍 Nenhuma imagem encontrada</h2>
                <p>Tente pesquisar outro termo</p>
            </div>
        )
    }

    return(
        <div className="gallery">
            {imagens.map((img) => (
                <div key={img.id} className="card" onClick={() => setSelectedImage(img)}>
                    <img src={img.image} alt={img.title} />
                    <h3>{img.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default Gallery;