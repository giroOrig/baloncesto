// para usar variables de estado
import { connect } from "react-redux"
import '../../css/index.css';

function Navbar(){
    return(
        <nav className="navbar">
            <img src="https://thumbs.dreamstime.com/z/editorial-del-logo-de-los-angeles-lakers-sobre-fondo-blanco-el-icono-vectores-logos-iconos-conjunto-medios-sociales-pancarta-plana-209798256.jpg" width={50} height={50}/>
            <ul>
                <li>
                    <a href="../pages/nosotros.jsx">Nosotros</a>
                    <a href="../pages/nosotros.jsx">Nosotros</a>
                    <a href="../pages/nosotros.jsx">Nosotros</a>
                    <a href="../pages/nosotros.jsx">Nosotros</a>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps= state =>({

})
export default connect (mapStateToProps, {

}) (Navbar)