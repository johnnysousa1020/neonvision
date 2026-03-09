import "./Modal.css"

function Modal({ image, onClose }){
    if(!image) return null;

    return(
        <div className="modal-overlays" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>X</button>
                <img src={image.image} alt={image.title} />
                <h2>{image.title}</h2>
                <p>{image.description}</p>
            </div>
        </div>
    )
}


export default Modal;