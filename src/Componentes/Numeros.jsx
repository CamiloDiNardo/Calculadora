import React from "react";
import PropTypes from "prop-types";
import Boton from "./Button";
/*APLICAMOS DYR Para no Repetir el mismo componente <Button 50mil veces*/
const numeros = [7,8,9,4,5,6,1,2,3,0] /*cada numero del array va a la funcion RenderBoton*/

const RenderBotones = ClickNumeros =>{
const RenderBoton = numero =>( /*y aca el numero se transforma gracias al map en un texto y con una evento click el clickeo asociado*/
<Boton key={numero} text={numero.toString()} clickeo={ClickNumeros}/> /* Le Pusimos una key xq es una lista dinamica*/
)
return numeros.map(RenderBoton)
}

const Numeros = ({ClickNumeros}) => ( /*esto es el componente que adentro tiene la funcion que tiene el html con los componentes.*/
    <section className="numeros">
        {
        RenderBotones(ClickNumeros)
        }
    </section>
)
Numeros.propTypes = {
    ClickNumeros: PropTypes.func.isRequired
}
export default Numeros