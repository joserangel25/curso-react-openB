import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Estado = ({estadoUsser}) => {
    const [estado, setEstado] = useState(estadoUsser);

    const on = ()=> {
        setEstado(true)
        
    }
    const off = ()=> {
        setEstado(false)
    }
    return (
        <>
            <label>Cómo quieres aparecer?</label>
            <button onClick={on}>On</button><button onClick={off}>Off</button>
            <p>Su estado es: {estado ? "En línea" : "Desconectado"}</p>
        </>
    );
}
Estado.propTypes = {
    estado: PropTypes.bool,
}
export default Estado;