import React from "react";

// se crea componente con function declaration

function Header({titulo,nombre}) {

    return(
        
        <h3 className="encabezado">Esta es la {titulo} {nombre}</h3>
    )

}

export default Header;