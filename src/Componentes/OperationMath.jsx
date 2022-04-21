import React from "react";
import PropTypes from "prop-types"
import Boton from "./Button";

const OperacionMath =({OperacionClick , OperacionIgual}) =>(
        <section className="OperacionMath">
            <Boton text="+" clickeo={OperacionClick}/>
            <Boton text="-" clickeo={OperacionClick}/>
            <Boton text="x" clickeo={OperacionClick}/>
            <Boton text="/" clickeo={OperacionClick}/>
            <Boton text="=" clickeo={OperacionIgual}/>
        </section>
)
OperacionMath.propTypes = {
    OperacionClick: PropTypes.func.isRequired,
     OperacionIgual: PropTypes.func.isRequired
    }
export default OperacionMath