import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css"

function Footer(){
    return(
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-logo">
                    <h2>NeonVision</h2>
                    <p>Explorando o futuro da tecnologia e do design Cyberpunk</p>
                </div>

                <div className="footer-links">
                    <h3>Navegação</h3>
                    <ul>
                      <li><a href="#">Inicio</a></li>
                      <li><a href="#">Sobre</a></li>
                      <li><a href="#">Galeria</a></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h3>Redes</h3>
                    <div className="icons-footer">
                    <a><FaGithub /></a>
                    <a><FaLinkedin /></a>
                    <a><FaInstagram /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>2026 NeonVision - Projeto React desenvolvido por Johnny Sousa</p>
            </div>
        </footer>
    )
}


export default Footer;