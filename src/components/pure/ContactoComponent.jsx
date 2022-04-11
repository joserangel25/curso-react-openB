import propTypes from "prop-types";
import { Contacto } from "../../models/contacto.class";
import Estado from "./Estado";

const ContactoComponent = ({infoContacto}) => {
    return (
        <div>
            
                <h4>Usser: {infoContacto.nombre} {infoContacto.apellido}</h4>
                <p>Correo: {infoContacto.email}</p>
                {/* <p>Estado: {infoContacto.estado ? "Contacto en línea" : "Contacto no disponible "}</p> */}
                <Estado estadoUsser={infoContacto.estado}/>
        </div>
    );
}

export default ContactoComponent;

ContactoComponent.propTypes = {
    infoContacto: propTypes.instanceOf(Contacto)
}

