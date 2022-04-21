import React from "react";
import PropTypes from "prop-types";
import "./Boton.css";

const Boton = ({type, text, clickeo})=>( /*3 Variables con destructuring*/ /*Funcion acortada (sin return y llaves)*/
        <button className={type} onClick={() => clickeo(text)}>
            <span>{text}</span>
        </button>
)

Boton.propTypes={ /*PropTypes*/
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickeo: PropTypes.func.isRequired
}
export default Boton 