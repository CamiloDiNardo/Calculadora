import React from "react";
import PropTypes from "prop-types"
import Boton from "./Button"; /*importamos el componente boton y lo usamos*/

const Funciones = ({Eliminar, EliminarTodo})=>( 
<section className="funciones">
    <Boton type="TextoGrande" text="Eliminar" clickeo={EliminarTodo}/> 
    <Boton text="&larr;" clickeo={Eliminar}/> 
</section> 
)

Funciones.propTypes = {
Eliminar: PropTypes.func.isRequired,
EliminarTodo: PropTypes.func.isRequired
}
export default Funciones