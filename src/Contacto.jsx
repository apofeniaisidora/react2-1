import "./Navbar.css"
function Contacto() {
    return(
        <div>
            <h1>Pide tu torta ideal aquí!</h1>
            <form className="formulario">
                <label>Correo</label>
                <input></input>
                <label>Descripción</label>
                <input className="descripcion"></input>
                <label>Para cuando la necesitas?</label>
                <input type={"date"}></input>
                <button>Envíar</button>
            </form>

        </div>
    )
}

export default Contacto;