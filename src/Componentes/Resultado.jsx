import React from "react"
import PropTypes from "prop-types"

const Resultado = ({valor}) => ( 
<div className="resultado">
{valor}
</div>
)
Resultado.propTypes = {
    valor: PropTypes.string.isRequired
}
Resultado.defaultProps = { /*Si no hay ninguna propiedad en <Resultado /> o esta puesta como undefined, por defecto vamos a tener el valor "0"*/
    valor: "0"
 }
export default Resultado